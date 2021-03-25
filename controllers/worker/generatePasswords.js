const { parentPort, workerData } = require('worker_threads');
const generator = require('generate-password');

const length = workerData.passwordLength;
const upperCase = workerData.upperCase;
const lowerCase = workerData.lowerCase;
const digits = workerData.digits;
const specialChar = workerData.specialChar;

const passwords = generator.generateMultiple(10, {
    length: length,
    uppercase: upperCase,
    lowercase: lowerCase,
    numbers: digits,
    symbols: specialChar,
    strict: true
});

parentPort.postMessage(passwords);
