const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
    // Query
    const query = User.find(function (err, users) {

        res.send(users);
    });
}),

    app.listen(process.env.PORT || 3000);


mongoose.connect("mongodb://localhost:27017/usersMobileAppDB", {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

const UserSchema = new mongoose.Schema({
    name: String,
    lastname: String
})

const User = mongoose.model("User", UserSchema);

const user = new User({
    name: "Yannik",
    lastname: "Simon"
})
// user.save();



