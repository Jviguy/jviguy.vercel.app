import mongoose, {Schema} from "mongoose";

const schema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        require: true,
    },
    type: {
        type: String,
        required: true
    },
},{timestamps: true});

export default mongoose.models.User || mongoose.model("User", schema);