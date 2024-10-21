// src/routes/userRoutes.js
const { Router } = require('express');
const { body, validationResult } = require('express-validator');
const UserController = require('../controllers/userController');

const router = Router();
const userController = new UserController();

// Middleware to required validate 
const validate = (validations) => {
  return async (req, res, next) => {
    await Promise.all(validations.map(validation => validation.run(req)));
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }
    res.status(400).json({ errors: errors.array() });
  };
};

// Rote Create User
router.post(
  '/create-user',
  validate([
    body('username').notEmpty().withMessage('Username is required.'),
    body('email').isEmail().withMessage('Invalid email.'),
    body('birthdate').isDate().withMessage('Invalid date.'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long.'),
    body('confirmPassword').custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Passwords do not match.');
      }
      return true;
    })
  ]),
  async (req, res) => {
    try {
      await userController.createUser(req, res);
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  }
);

// Login Rote 
router.post(
  '/login',
  validate([
    body('email').isEmail().withMessage('Invalid email.'),
    body('password').notEmpty().withMessage('Password is required.'),
  ]),
  async (req, res) => {
    try {
      await userController.login(req, res);
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  }
);

module.exports = router;
