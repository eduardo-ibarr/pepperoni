const { notFound } = require("../../../constants/error_constants")
const userSchema = require("../../../models/user")
const connection = require("../../../database/connection")

module.exports = (req, res) => {
    connection.then(
        () => {
            userSchema.find((err, arr) => {
                if(err){
                    res.send(err);
                }
                else{
                    res.send(arr);
                }
            })
        },
        err => {
            console.error(err)
            res.status(404).send(notFound)
        })
}

