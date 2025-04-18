import express from 'express'
import { moviesindex, moviescreate, moviesupdate, moviesdelete } from '../controllers/movies.controllers.js';

const router = express.Router();


// mvc pattern *model view controllers*
//r - read
router.get('/', moviesindex)

// c- create
router.post('/', moviescreate)

//u - update
router.put('/', moviesupdate)

//d - delete
router.delete('/', moviesdelete)

export default router;
