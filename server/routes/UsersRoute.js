import express from 'express';
import { createUser, getUsers } from '../controllers/UserController.js';

const usersRouter = express.Router();

usersRouter.get('/', getUsers);
usersRouter.post('/', createUser);

export default usersRouter;
