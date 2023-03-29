import express from 'express';
import { getUsers } from '../controllers/UserController.js';

const usersRouter = express.Router();

usersRouter.get('/', getUsers);

export default usersRouter;
