import express from 'express';
import {
    createUser,
    deleteUser,
    getUsers,
    updateUser,
    getUser,
} from '../controllers/UserController.js';

const usersRouter = express.Router();

usersRouter.get('/', getUsers);
usersRouter.get('/main', getUser);
usersRouter.post('/', createUser);
usersRouter.put('/', updateUser);
usersRouter.delete('/', deleteUser);

export default usersRouter;
