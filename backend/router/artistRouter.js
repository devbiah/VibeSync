import express from 'express'
import { allAlbums, allArtists, getAlbumById, getMusicsByAlbumId, songs, songsById } from '../controller/artistController.js'

const artistRouter = express.Router()

artistRouter.get('/allArtists', allArtists)
artistRouter.get('/allAlbums', allAlbums)
artistRouter.get('/albums/:id', getAlbumById); 
artistRouter.get('/albums/:id/musics', getMusicsByAlbumId)
artistRouter.get('/songs', songs)
artistRouter.get('/songs/:id', songsById)

export { artistRouter }