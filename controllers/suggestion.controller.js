const { Worker } = require('worker_threads');

const suggestionController = {};

suggestionController.getPasswords = async (req, res) => {
    try {
        const suggestions = new Worker(__dirname + '/worker/generatePasswords.js', { workerData: req.body });

        await suggestions.on('message', (suggestions) => {
            console.log(suggestions);
            return res.status(200).json(suggestions);
        });

    } catch (error) {
        return res.status(500).json({ message: 'Something wrong!' });
    }

}

module.exports = suggestionController;