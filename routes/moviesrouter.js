import express from 'express'
import { moviesindex, moviescreate, moviesupdate, moviesdelete, moviesdetail } from '../controllers/movies.controllers.js';

const router = express.Router();


// mvc pattern *model view controllers*
//r - read
router.get('/', moviesindex)


router.get('/:id', moviesdetail)
// c- create
router.post('/', moviescreate)

//u - update
router.put('/:id', moviesupdate)

//d - delete
router.delete('/', moviesdelete)

export default router;
