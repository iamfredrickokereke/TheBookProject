const express = require('express');
const dotenv = require('dotenv');




// To load the config file configuration

dotenv.config({ path: './config/conf.env'})

const app = express();

const port = process.env.port

app.listen()