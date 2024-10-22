import Sequelize from 'sequelize'

const sequelize = new Sequelize(
    'vibesync',
    'postgres',
    'postgres',
    {
        host: 'localhost',
        port: 5432,
        dialect: 'postgres'
    }
)
const User = sequelize.define('user', {
    username: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    birthdate: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: Sequelize.DataTypes.ENUM('active', 'inactive'),
        allowNull: false,
        defaultValue: 'inactive'
    }
})

const createTables = () => {
    sequelize.authenticate().then(() => {
        console.log('conected')
    })
        .catch((err) => {
            console.log(err)
        })
    sequelize.sync({ force: true }).then(() => {
        console.log('Created Table')
    })
}
export { User, sequelize, createTables };