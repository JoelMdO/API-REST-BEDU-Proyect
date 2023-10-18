require('dotenv').config();

const { initDatabase } = require('./src/models/db');
initDatabase();

const express = require('express');
const app = express();

app.use(express.json());

const airportsRouter = require('./src/routers/airports');
const usersRouter = require('./src/routers/users');
const commentsRouter = require('./src/routers/comments');

///Error validation after joi
const errorJoi = require('./src/middleware/joi-validation-error');
const errorUnknown = require('./src/middleware/uknown-error');

app.use(airportsRouter, usersRouter, commentsRouter);
app.use(errorJoi);
app.use(errorUnknown);



app.listen(process.env.SERVER_PORT, function () {
    console.log('Listening port: ' + process.env.SERVER_PORT);
});
