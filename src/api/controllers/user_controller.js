const createService = require("../services/users/create")
const readService = require("../services/users/read")
const readOneService = require("../services/users/read_one")
const updateService = require("../services/users/update")
const deleteService = require("../services/users/delete")
const loginService = require("../services/users/login")

class User {
    create(req, res) {
        createService(req, res)
    }

    read(req, res) {
        readService(req, res)
    }

    readOne(req, res) {
        readOneService(req, res)
    }

    update(req, res) {
        updateService(req, res)
    }

    delete(req, res) {
        deleteService(req, res)
    }

    login(req, res) {
        loginService(req, res)
    }
}

module.exports = new User