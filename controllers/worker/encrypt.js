// const { parentPort, workerData } = require('worker_threads');
// const crypto = require('crypto');

// let password = workerData.password;
// try {
//     let dbKey = crypto.randomBytes(32);
//     let userKey = crypto.randomBytes(16);

//     let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(dbKey), userKey);

//     let encryptedData = cipher.update(JSON.stringify(password), 'utf8', 'binary');
//     encryptedData = Buffer.concat([encryptedData, cipher.final('binary')]);

//     let encryptedPass = `${encryptedData}.${dbKey.toString('hex')}.${userKey.toString('hex')}`;

//     parentPort.postMessage({ status: 1, password: encryptedPass });
// } catch (error) {
//     parentPort.postMessage({ status: 0, message: error.message });
// }



const crypto = require('crypto');

module.exports.encrypt = async (workerData) => {
    const algorithm = 'aes-256-ctr';
    const password = workerData.password;
    const dbKey = Buffer.from(workerData.dbKey, 'hex');
    const userKey = Buffer.from(workerData.userKey, 'hex');
    let cipher = await crypto.createCipheriv(algorithm, Buffer.from(dbKey), userKey)
    let crypted = cipher.update(password, 'utf8', 'hex')
    crypted += cipher.final('hex');

    return crypted;
}