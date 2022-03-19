const createService = require("../services/order/create")
const readService = require("../services/order/read")
const readOneService = require("../services/order/read_one")
const updateService = require("../services/order/update")
const deleteService = require("../services/order/delete")

class Order {
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
}

module.exports = new Order