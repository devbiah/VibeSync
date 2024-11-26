import express from 'express'
import { allAlbums, allArtists, getAlbumById, getArtistById, getMusicsByAlbumId, getTheAlbum, songs, songsById } from '../controller/artistController.js'

const artistRouter = express.Router()

artistRouter.get('/allArtists', allArtists)
artistRouter.get('/allAlbums', allAlbums)
artistRouter.get('/albums/:id', getAlbumById); 
artistRouter.get('/album/:id', getTheAlbum); 
artistRouter.get('/albums/:id/musics', getMusicsByAlbumId)
artistRouter.get('/songs', songs)
artistRouter.get('/songs/:id', songsById)
artistRouter.get('/artist/:id',getArtistById)

export { artistRouter }