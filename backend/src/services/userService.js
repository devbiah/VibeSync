const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { User } = require('../models/user'); 

class UserService {
    async createUser(username, email, birthdate, password) {
        try {
            // Verify if email is already signed up
            const existingUserByEmail = await User.findOne({ where: { email } });
            if (existingUserByEmail) {
                return 'E-mail já cadastrado';
            }

            // Generate an hash
            const hashedPassword = await bcrypt.hash(password, 5);
            
            // Create an user with hash
            const user = await User.create({
                username,
                email,
                birthdate,
                password: hashedPassword,
            });
            return user; // Return user created
        } catch (error) {
            console.error('Erro ao criar usuário:', error);
            return 'Erro ao criar usuário';
        }
    }

    async loginUser(email, password) {
        try {
            const user = await User.findOne({ where: { email } });
            if (!user) {
                return null; // User not found
            }

            // Verify password
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return null; // Incorrect Password
            }

            // Generate a token
            const token = jwt.sign(
                { id: user.id, email: user.email },
                process.env.JWT_SECRET || 'default_secret',
                { expiresIn: '1h' }
            );
            return { token };
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            return null;
        }
    }
}

module.exports = new UserService();
