const mongoose = require("mongoose");

const campgroundSchema = new mongoose.Schema({
    name:String,
    image:String,
    description:String,
    location: String,
    lat: Number,
    lng: Number,
    createdAt: { type: Date, default: Date.now },
    author: {
        id: {
           type:mongoose.Schema.Types.ObjectId,
           ref:"User"
        },
        username: String
    },
    comments: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Comment"
      }
    ],
    price: Number
});

module.exports = mongoose.model("Campground", campgroundSchema);