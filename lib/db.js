import Mongoose from "mongoose"
import dotenv from "dotenv"


//dotenv is using packgae dotenv and config use get the env string value to give and into the config
dotenv.config();

const connect = async () => {
    try {
        await Mongoose.connect(process.env.mongodb_uri)
        console.log("mongodb sucessfully");

    } catch (error) {
        console.error(error.message);
        process.exit(1)
    }
};

export default connect;