const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./db/db');
const vaultRouter = require('./routes/vaults');
const userRouter = require('./routes/users');
const suggestionRouter = require('./routes/suggestion');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const PORT = process.env.PORT;

app.use('/vaults', vaultRouter);
app.use('/user', userRouter);
app.use('/suggestion', suggestionRouter);

app.listen(PORT);