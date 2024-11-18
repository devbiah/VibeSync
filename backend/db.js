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
        unique: true
    },
    email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    profileImageUrl: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true
    }
})

const Artist = sequelize.define('Artist', {
    name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    bio: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: true,
    },
    imageUrl: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
    }
})

const Album = sequelize.define('Album', {
    title: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    releaseYear: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
    },
    coverImageUrl: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
    },
});

Album.belongsTo(Artist, {
    foreignKey: 'artistId',
    onDelete: 'CASCADE',
});

Artist.hasMany(Album, {
    foreignKey: 'artistId',
    as: 'Albums'
});

const Music = sequelize.define('Music', {
    title: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    duration: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
    },
    fileUrl: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    gif: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    }
});

Music.belongsTo(Album, {
    foreignKey: 'albumId',
    onDelete: 'CASCADE',
});
Music.belongsTo(Artist, {
    foreignKey: 'artistId',
    onDelete: 'CASCADE',
});
Album.hasMany(Music, {
    foreignKey: 'albumId',
    as: 'Musics'
});


const createTables = () => {
    sequelize.authenticate().then(() => {
        console.log('Conected')
    })
        .catch((err) => {
            console.log(err)
        })
    sequelize.sync({ alter: true }).then(() => {
        console.log('Created Table')
    })
}

export { User, sequelize, createTables, Artist, Album, Music };