const mysql = require('mysql2');
const express = require('express');
const app = express();
const port = 3000;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Prasad@04',
    database: 's06updates_db'
});

db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Connected to MySQL Database');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
