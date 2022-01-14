const express = require('express');

const router = express.Router();
const User = require('./users-model.js');

router.get('/users', (req, res) => {
    const result = User.get();
    if (result) {
        res.json({ result });
    } else {
        res.status(500).json({ message: "Error retrieving users" });
    }
})

router.post('/register', (req, res) => {
    const result = User.register(req.body);
    if (result) {
        res.status(200).json(result);
    } else {
        res.status(400).json({ message: "Username and password required" });
    }
})

router.post('/login', (req, res) => {
    const result = User.login(req.body);
        if (result) {
            res.json({ message: "Login successful!" });
        } else {
            res.status(400).json({ message: "Incorrect username or password" });
        }
})

module.exports = router;