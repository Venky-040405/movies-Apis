import { model, Schema } from "mongoose";
const movieschema = new Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
        },
        desc: {
            type: String,
            required: true,
        },
    }
)

const models = model("moviemodel", movieschema);

export default models;