const express = require('express');
const mysql = require('mysql2');

const app = express();
const PORT = process.env.PORT || 4000;

const db = mysql.createConnection({
    host: 'mysql',
    user: 'root',
    password: 'Grogu@2002',
    database: 'microservices'
});

db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Connected to MySQL');
});

app.get('/', (req, res) => {
    res.send('User Service is Running');
});

app.get('/users', (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) {
            res.status(500).send('Error fetching users');
            return;
        }
        res.json(results);
    });
});

app.listen(PORT, () => {
    console.log(`User Service running on port ${PORT}`);
});
