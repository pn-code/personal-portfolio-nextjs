import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
    name: { type: String, minLength: 3, maxLength: 30, required: true },
    tele: { type: String, minLength: 10, maxLength: 15, required: true },
    email: { type: String, minLength: 5, maxLength: 40, required: true },
    title: { type: String, minLength: 3, maxLength: 30, required: true },
    body: { type: String, minLength: 10, maxLength: 300, required: true },
    date: { type: String, required: true },
},
{
    timestamps: true
});

module.exports =
    mongoose.models.Message || mongoose.model("Message", MessageSchema);
