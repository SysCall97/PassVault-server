const vaultModel = require("../models/vault.model");

const vaultService = {}

vaultService.create = (entry) => {
    return vaultModel.create(entry);
}

vaultService.getPasswordsByEmail = (email) => {
    return vaultModel.find({ email: email });
}

vaultService.updatePasswordById = (id, email, password) => {
    return vaultModel.findOneAndUpdate({ _id: id, email: email }, { password: password });
}

module.exports = vaultService;