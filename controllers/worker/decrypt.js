const crypto = require('crypto');

module.exports.decrypt = async (workerData) => {
    const algorithm = 'aes-256-ctr';
    const storedPass = workerData.password;
    const dbKey = Buffer.from(workerData.dbKey, 'hex');
    const userKey = Buffer.from(workerData.userKey, 'hex');
    const userKeyBuffer = Buffer.from(userKey, 'hex');
    const dbKeyBuffer = Buffer.from(dbKey, 'hex');

    let decryptedData = Buffer.from(storedPass, 'hex');
    let decipher = await crypto.createDecipheriv(algorithm, dbKeyBuffer, userKeyBuffer);
    decryptedData = decipher.update(decryptedData);
    decryptedData = Buffer.concat([decryptedData, decipher.final()]);

    return decryptedData.toString();
}