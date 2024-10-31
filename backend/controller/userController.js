import { User } from "../db.js"

const allUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findOne({ where: { id: id } });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        await User.destroy({ where: { id: id } });
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { allUsers, deleteUser }