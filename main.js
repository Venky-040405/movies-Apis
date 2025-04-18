import express from 'express'
import movies from "./routes/moviesrouter.js"
import connect from './lib/db.js';
const app = express();


// client -> middleware ->server


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

connect();

app.get('/', (req, res) => {
    res.json({ "message": "vanakam!!!" })
})
app.use('/movies', movies)




app.listen(5500, () => {
    console.log(`sucessfully http://localhost:${5500}`);

}) 