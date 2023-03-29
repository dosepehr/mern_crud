import User from '../models/UserModel.js';

// ! getting all users
export const getUsers = async (req, res) => {
    try {
        const allUsers = await User.find({});
        res.json(allUsers);
    } catch (err) {
        console.log(err);
    }
};
// ! creating new user
export const createUser = async (req, res) => {
    try {
        let user = new User({
            name: req.body.name,
            email: req.body.email,
            gender: req.body.gender,
        });
        let newUser = await user.save();
        res.json(newUser);
    } catch (err) {
        console.log(err);
    }
};
