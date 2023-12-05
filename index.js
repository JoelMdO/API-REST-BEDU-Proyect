require('dotenv').config();

const { initDatabase } = require('./src/models/db');
initDatabase();

const express = require('express');
const app = express();

const cors = require('cors');

//should be added the react app production domain iso localhost:5173
const allowedOrigins = ['http://localhost:5173', 'https://reactjs-website-dfb35.web.app'];
app.use(cors({
    origin: function (origin, callback) {
        // Check if the origin is in the list of allowed origins or if it's not provided (e.g., same-origin requests)
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: 'GET,POST',
    credentials: true, // Enable credentials (cookies, authorization headers)
    optionsSuccessStatus: 204, // Set the response status for successful OPTIONS requests
    allowedHeaders: 'Origin,X-Requested-With,Content-Type,Accept,Authorization',
}));


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
