const getClients = require("./01 - getClients.js");
const createClient = require("./02 - createClient.js");
const updateClient = require("./03 - updateClient.js");
const getClientById = require("./04 - getClientById.js")
const logicDeleteClient = require("./05 - logicDeleteClient.js")

module.exports = { getClients, createClient, updateClient, getClientById, logicDeleteClient }