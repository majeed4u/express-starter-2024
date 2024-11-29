// app.js
import express from 'express';
import dotenv from 'dotenv';
import session from 'express-session';
import passport from 'passport';
import { StatusCodes } from 'http-status-codes'
import env from '@/utils/envalid'

import cors from 'cors'
import logger from '@/utils/logger';
import notFoundHandler from '@/middleware/notFoundHandler';
import serverErrorHandler from '@/middleware/serverErrorHandler';
dotenv.config()



const app = express();

app.set('trust proxy', 1);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: env.SESSION_SECRET || 'Secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: process.env.NODE_ENV === 'production',
        maxAge: 1000 * 60 * 60 * 24
    }
}));
// app.use(cookieSession({
//     name: 'session',
//     keys: [process.env.SESSION_SECRET || 'secret'],
//     maxAge: 1000 * 60 * 60 * 24
// }));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors({
    origin: env.CORS_ORIGIN,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,

}))
app.use((req, res, next) => {
    logger.info(`${req.method} ${req.url}`);
    next();
});

app.get('/', (req, res) => {
    res.status(StatusCodes.OK).send('Hello World!');
});

// Use the 404 Not Found handler
app.use(notFoundHandler);

// Use the 500 Server Error handler
app.use(serverErrorHandler);


export default app;