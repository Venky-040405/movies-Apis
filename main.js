import express from 'express'
import movies from "./routes/moviesrouter.js"
import connect from './lib/db.js';
const app = express();


// client -> middleware ->server

connect();

app.get('/', (req, res) => {
    res.json({ "message": "vanakam!!!" })
})
app.use('/movies', movies)




app.listen(8939, () => {
    console.log(`sucessfully http://localhost:${8939}`);

}) 