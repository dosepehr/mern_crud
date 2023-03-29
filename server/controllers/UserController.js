import User from '../models/UserModel.js'


export const getUsers = async (req, res) => {
    try {
        const allUsers = await User.find({})
        res.json(allUsers)
    } catch (err) {
        console.log(err)
    }
}