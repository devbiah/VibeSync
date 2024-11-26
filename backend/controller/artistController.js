import { Album, Artist, Music } from "../db.js";

const allArtists = async (req, res) => {
    try {
        const allArtists = await Artist.findAll();
        res.status(200).json(allArtists);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const getArtistById = async (req, res) => {
    const { id } = req.params;
    try {
      const artist = await Artist.findByPk(id, {
        attributes: ['name', 'bio', 'imageUrl'] 
      });
      if (!artist) {
        return res.status(404).json({ message: 'Artist not found' });
      }
  
      res.status(200).json(artist);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
    
  };
  
const allAlbums = async (req, res) => {
    try {
        const allAlbums = await Album.findAll({
            include: {
                model: Artist,
                as: 'Artist',
                attributes: ['name']
            }
        });
        res.status(200).json(allAlbums);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAlbumById = async (req, res) => {
    const { id } = req.params;
    try {
        const album = await Album.findByPk(id, {
            include: [
                {
                    model: Artist,
                    as: 'Artist',
                    attributes: ['name', 'bio']
                },
                {
                    model: Music,
                    as: 'Musics',
                    attributes: ['id', 'title', 'duration', 'fileUrl']
                }
            ]
        });
        if (!album) {
            return res.status(404).json({ message: 'Album not found' });
        }
        res.status(200).json(album);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getTheAlbum = async (req, res) => {
    const { id } = req.params;
    try {
      const albums = await Album.findAll({
        where: { artistId: id },
        include: [
          {
            model: Artist,
            as: 'Artist',
            attributes: ['name', 'bio']
          }
        ]
      });
  
      if (!albums || albums.length === 0) {
        return res.status(404).json({ message: 'No albums found for this artist' });
      }
  
      res.status(200).json(albums);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  

const getMusicsByAlbumId = async (req, res) => {
    const { id } = req.params;
    try {
        const musics = await Music.findAll({
            where: { albumId: id },
            attributes: ['id', 'title', 'gif', 'fileUrl'],
            include: {
                model: Artist,
                as: 'Artist',
                attributes: ['name']
            }
        });
        if (!musics.length) {
            return res.status(404).json({ message: 'No songs found for this album' });
        }
        res.status(200).json(musics);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const songs = async (req, res) => {
    try {
        const songs = await Music.findAll({
            include: {
                model: Artist,
                as: 'Artist',
                attributes: ['name']
            },
            attributes: ['title','id']
        });

        const formattedSongs = songs.map(song => ({
            artist: song.Artist.name,
            songTitle: song.title,
            id: song.id
        }));

        res.status(200).json(formattedSongs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const songsById = async (req, res) => {
    const { id } = req.params;
    try {
        const song = await Music.findByPk(id, {
            include: {
                model: Artist,
                as: 'Artist',
                attributes: ['name']
            },
            attributes: ['title', 'id', 'gif', 'fileUrl', 'songUrl']
        });

        if (!song) {
            return res.status(404).json({ message: 'Song not found' });
        }

        const formattedSong = {
            artist: song.Artist.name,
            songTitle: song.title,
            id: song.id,
            fileUrl: song.fileUrl,
            gif: song.gif,
            songUrl: song.songUrl
        };

        res.status(200).json(formattedSong);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { allAlbums, getAlbumById, getMusicsByAlbumId, getArtistById,getTheAlbum, allArtists, songs, songsById };