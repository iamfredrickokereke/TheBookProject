const express = require('express');
const dotenv = require('dotenv');




// To load the config file configuration

dotenv.config({ path: './config/conf.env'})

const app = express();

const port = process.env.port  || 5000

app.listen(port, console.log(`server running in ${process.env.NODE_ENV} on port ${port}`))