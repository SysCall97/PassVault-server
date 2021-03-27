// const { Worker } = require('worker_threads');
const msg = require("../consts/messages");
const vaultService = require("../services/vault.service");
const { decrypt } = require('./worker/decrypt');
const { encrypt } = require('./worker/encrypt');

const vaultController = {};

vaultController.create = async (req, res) => {
    try {
        const password = await encrypt({ password: req.body.password, dbKey: process.env.DBKEY, userKey: process.env.USERKEY });
        req.body.password = password;
        const entry = await vaultService.create(req.body);
        return res.status(200).json({ message: msg.PASSWORD_SAVED_SUCCESSFULLY });
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
}

vaultController.getPasswordsByEmail = async (req, res) => {
    try {
        const entry = [];
        await (async () => {
            const document = await vaultService.getPasswordsByEmail(req.body.email);

            await document.forEach(async (data) => {
                const password = await decrypt({ password: data.password, dbKey: process.env.DBKEY, userKey: process.env.USERKEY });
                entry.push({ id: data._id, siteLink: data.siteLink, password });
            });

        })();

        return res.status(200).json({ data: entry });

    } catch (e) {
        return res.status(500).json({ message: msg.SOMETHING_WRONG });
    }
}

vaultController.updatePassword = async (req, res) => {

    try {
        const id = req.body.id;
        const email = req.body.email;
        const updatedPassword = await encrypt({ password: req.body.password, dbKey: process.env.DBKEY, userKey: process.env.USERKEY });
        const update = await vaultService.updatePasswordById(id, email, updatedPassword);
        return res.status(200).json({ message: msg.PASSWORD_UPDATED_SUCCESSFULLY });
    } catch (e) {
        return res.status(500).json({ message: msg.SOMETHING_WRONG });
    }
}

module.exports = vaultController;