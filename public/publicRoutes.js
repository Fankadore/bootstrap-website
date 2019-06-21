"use strict";

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));
router.get('/projects', (req, res) => res.sendFile(__dirname + '/projects/projects.html'));
router.get('/resume', (req, res) => res.sendFile(__dirname + '/resume.html'));
router.get('/contact', (req, res) => res.sendFile(__dirname + '/contact.html'));

module.exports = router;