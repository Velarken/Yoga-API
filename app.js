const express = require('express');
const cors = require('cors');
const path = require('node:path');
require('dotenv').config();
const poseAPI = require('./db/queries.js')

const app = express();

const corsOptions = {
    origin: 'localhost:5173',
    optionsSuccessStatus: 200
}

// middlewares
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.get('/', ( req, res ) => {
    res.json({
        intro: 'Welcome to my yoga pose API!',
        routes: {
            allPoses: 'https://yoga-api-js6z.onrender.com/poses',
            authentication: 'https://yoga-api-js6z.onrender.com/account'
        }
    })
})
app.get('/poses', poseAPI.getAllPoses)

// server
app.listen(process.env.SERVER_PORT, (err) => {
    if (err) {
        console.log('Server error: ', err)
    }
    console.log('Server started, listening on port: ', process.env.SERVER_PORT)
})