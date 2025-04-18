import models from "../models/model.movie.js";

export const moviesindex = async (req, res) => {

    try {
        const movies = await models.find()
        return res.json(movies)
    }
    catch (error) {
        return res.json({ message: error.message })
    }
}

export const moviescreate = async (req, res) => {
    console.log(req.body);

    const newmovie = new models({
        title: req.body.title,
        desc: req.body.desc,
    })
    try {
        const movie = await newmovie.save();
        return res.status(201).json(movie)
    }
    catch (error) {
        return res.status(400).json(error.message)
    }
}


export const moviesdetail = async (req, res) => {
    try {
        const movies = await models.findById(req.params.id);
        if (movies == null) {
            return res.status(404).json({ message: "cannot find movie" })
        }
        else {
            return res.json(movies)
        }
    }
    catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const moviesupdate = async (req, res) => {


    try {
        const movies = await models.findOneAndUpdate({ _id: req.params.id },
            {
                title: req.body.title,
                desc: req.body.desc,
            }, {
            new: true,
        }
        );
        return res.json(movies)
    } catch (error) {
        return res.json({ message: error.message })
    }

}

export const moviesdelete = async (req, res) => {
    const id = req.params.id;

    try {
        await models.deleteOne({ _id: id });

        res.json({ message: "deleted" })
    } catch (error) {
        res.json({ message: error.message });
    }
}
