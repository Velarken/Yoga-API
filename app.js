const express = require('express');
const path = require('node:path');
require('dotenv').config();
const poseAPI = require('./db/queries.js')

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.get('/', poseAPI.getAllPoses)

// server
app.listen(process.env.SERVER_PORT, (err) => {
    if (err) {
        console.log('Server error: ', err)
    }
    console.log('Server started, listening on port: ', process.env.SERVER_PORT)
})