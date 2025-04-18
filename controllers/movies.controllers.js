export const moviesindex = (req, res) => {
    res.send("getting  movies")
}

export const moviescreate = (req, res) => {
    console.log(req.body);

    return res.json(req.body)
}

export const moviesupdate = (req, res) => {
    res.send("update the movie")
}

export const moviesdelete = (req, res) => {
    res.send("deleting  movies")
}

