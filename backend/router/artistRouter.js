import express from 'express'
import { allAlbums, allArtists, getAlbumById, getMusicsByAlbumId } from '../controller/artistController.js'

const artistRouter = express.Router()

artistRouter.get('/allArtists', allArtists)
artistRouter.get('/allAlbums', allAlbums)
artistRouter.get('/albums/:id', getAlbumById); 
artistRouter.get('/albums/:id/musics', getMusicsByAlbumId)

export { artistRouter }