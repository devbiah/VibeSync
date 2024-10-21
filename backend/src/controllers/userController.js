// src/controllers/userController.js
const UserService = require('../services/userService');

class UserController {
    async createUser(req, res) {
        const { username, email, birthdate, password, confirmPassword } = req.body;

        // Verify if the password and the confirm
        if (password !== confirmPassword) {
            return res.status(400).json({ message: 'Passwords do not match.' });
        }

        try {
            const user = await UserService.createUser(username, email, birthdate, password);

            if (typeof user === 'string') {
                return res.status(400).json({ message: user });
            }

            return res.status(201).json(user); // User created with success
        } catch (error) {
            console.error('Erro ao criar usuário:', error);
            return res.status(500).json({ message: 'Server error', error });
        }
    }

    async login(req, res) {
        const { email, password } = req.body;

        try {
            const result = await UserService.loginUser(email, password);

            if (!result) {
                return res.status(400).json({ message: 'Invalid email or password.' });
            }

            return res.status(200).json(result); // Login OK, retorn token
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            return res.status(500).json({ message: 'Server error', error });
        }
    }
}

module.exports = UserController;
