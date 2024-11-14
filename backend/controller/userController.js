import { User } from "../db.js"
import bcryptjs from 'bcryptjs'

const allUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const oneUser = async (req, res) => {
    const { username } = req.params;
    try {
        const user = await User.findOne({ where: { username: username } });
        res.status(200).json(user);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const changePasswordUser = async (req, res) => {
    const { username } = req.params;
    const { newPassword } = req.body;

    try {
        const user = await User.findOne({ where: { username } });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const hashedPassword = await bcryptjs.hash(newPassword, 10);
        await User.update({ password: hashedPassword }, { where: { username } });

        res.status(200).json({ message: 'Password changed successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteUser = async (req, res) => {
    const { username } = req.params;

    try {
        const user = await User.findOne({ where: { username: username } });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        await User.destroy({ where: { username: username } });
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateProfileImage = async (req, res) => {
    const { username } = req.params;
    const { secureUrl } = req.body;

    await User.update(
        { profileImageUrl: secureUrl },
        { where: { username:username } }
    );
    res.status(200).json({ message: 'Photo changed successfully' });

};

export { allUsers, deleteUser, oneUser, changePasswordUser, updateProfileImage }