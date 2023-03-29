import express from 'express';
import {
    createUser,
    deleteUser,
    getUsers,
    updateUser,
} from '../controllers/UserController.js';

const usersRouter = express.Router();

usersRouter.get('/', getUsers);
usersRouter.post('/', createUser);
usersRouter.put('/', updateUser);
usersRouter.delete('/', deleteUser);

export default usersRouter;
