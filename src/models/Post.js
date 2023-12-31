import mongoose, {Schema} from "mongoose";

const schema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    tile: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
},{timestamps: true});

export default mongoose.models.Post ||  mongoose.model("Post", schema);

