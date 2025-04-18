import express from 'express'
import movies from "./routes/moviesrouter.js"
const app = express();


// client -> middleware ->server

app.get('/', (req, res) => {
    res.json({ "message": "vanakam!!!" })
})
app.use('/movies', movies)




app.listen(5500, () => {
    console.log(`sucessfully http://localhost:${5500}`);

}) 