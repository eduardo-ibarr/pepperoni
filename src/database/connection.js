require("dotenv").config()
const mongoose = require("mongoose")

const string = `mongodb+srv://${process.env.URL_USER}:${process.env.URL_PASSWORD}@${process.env.URL_HOST}/myFirstDatabase?retryWrites=true&w=majority`

const connection = mongoose.connect(string, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})

module.exports = connection