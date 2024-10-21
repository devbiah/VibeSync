// src/models/User.js
import { Sequelize, DataTypes, Model } from 'sequelize';

const sequelize = new Sequelize(
    'vibesync',
    'postgres',
    'postgres',
    {
        host: 'localhost',
        port: 5432,
        dialect: 'postgres'
    }
);

class User extends Model {}

User.init(
    {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        sobrenome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        birthdate: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: DataTypes.ENUM('active', 'inactive'),
            allowNull: false,
            defaultValue: 'inactive'
        }
    },
    {
        sequelize,
        tableName: 'users',
    }
);

const createTables = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connected to the database');
        await sequelize.sync({ force: true });
        console.log('Created Table');
    } catch (err) {
        console.error('Error connecting to the database:', err);
    }
};

export { User, sequelize, createTables };
