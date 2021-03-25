const msg = require("../consts/messages");
const vaultService = require("../services/vault.service");

const vaultController = {};

vaultController.create = async (req, res) => {
    try {
        const entry = await vaultService.create(req.body);
        return res.status(200).json({ message: msg.PASSWORD_SAVED_SUCCESSFULLY });
    } catch (e) {
        return res.status(500).json({ message: msg.PASSWORD_SAVED_FAILED });
    }
}

vaultController.getPasswordsByEmail = async (req, res) => {
    try {
        const entry = await vaultService.getPasswordsByEmail(req.body.email);
        return res.status(200).json(entry);
    } catch (e) {
        return res.status(500).json({ message: msg.SOMETHING_WRONG });
    }
}

vaultController.updatePassword = async (req, res) => {
    
    try {
        const id = req.body.id;
        const email = req.body.email;
        const updatedPassword = req.body.password;
        console.log(id, email, updatedPassword);
        const update = await vaultService.updatePasswordById(id, email, updatedPassword);
        return res.status(200).json({ message: msg.PASSWORD_UPDATED_SUCCESSFULLY });
    } catch (e) {
        return res.status(500).json({ message: msg.SOMETHING_WRONG });
    }
}

module.exports = vaultController;