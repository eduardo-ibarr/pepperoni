const createService = require("../services/users/create")
const readService = require("../services/users/read")
const readOneService = require("../services/users/read_one")
const updateService = require("../services/users/update")
const deleteService = require("../services/users/delete")
const loginService = require("../services/users/login")
const addOrderService = require("../services/users/add_order")
const findOrderService = require("../services/users/find_orders")
const findAdressService = require("../services/users/find_adress")

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

    addOrder(req, res) {
        addOrderService(req, res)
    }

    findOrder(req, res) {
        findOrderService(req, res)
    }

    findAdress(req, res) {
        findAdressService(req, res)
    }
}

module.exports = new User