require('dotenv').config();
const express = require('express');
const path = require('node:path');
const mongoDbConnection = require('./middlewares/dbConnection');

const PORT = process.env.PORT || 3500;
const app = express();

mongoDbConnection()
    .then(() => {
        console.log('Sikeres adatbázis csatlakozás!');

        app.listen(PORT, () => {
            console.log(`http://localhost:${PORT}/api/cinema`);
        });
    })
    .catch((error) => {
        console.log(`Valami hiba történt: ${error}`);
    });
