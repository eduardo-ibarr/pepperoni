const createService = require("../services/pizza/create")
const readService = require("../services/pizza/read")
const readFiveService = require("../services/pizza/read_five")
const readTenService = require("../services/pizza/read_ten")
const readOneService = require("../services/pizza/read_one")
const updateService = require("../services/pizza/update")
const deleteService = require("../services/pizza/delete")

class Pizza {
    create(req, res) {
        createService(req, res)
    }

    read(req, res) {
        readService(req, res)
    }

    readFive(req, res) {
        readFiveService(req, res)
    }

    readTen(req, res) {
        readTenService(req, res)
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
}

module.exports = new Pizza