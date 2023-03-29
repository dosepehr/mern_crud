import express from 'express';
import {
    createUser,
    getUsers,
    updateUser,
} from '../controllers/UserController.js';

const usersRouter = express.Router();

usersRouter.get('/', getUsers);
usersRouter.post('/', createUser);
usersRouter.put('/', updateUser);

export default usersRouter;
