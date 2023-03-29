import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import usersRouter from './routes/UsersRoute.js';

const server = express();
server.use(cors());
server.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/mern_crud');

mongoose.Promise = global.Promise;

server.use('/api/users', usersRouter);

server.listen(4000, () => {
    console.log('server is running on port 4000');
});
