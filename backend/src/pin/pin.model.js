const mongoose = require("mongoose");

const PinSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            require: true,
        },
        title: {
            type: String,
            require: true,
        },
        desc: {
            type: String,
            require: true,
        },
        rating: {
            type: Number,
            required: true,
            min: 0,
            max: 5,
        },
        lat: {
            type: Number,
            require: true,
        },
        long: {
            type: Number,
            require: true,
        },
    },
    { timestamps: true }
);

const Pin = mongoose.model("Pin", PinSchema);

module.exports = Pin;
