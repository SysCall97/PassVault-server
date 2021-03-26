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

const PORT = 5000;

app.get('/', (req, res) => res.send("BE is working"));

app.use('/vaults', vaultRouter);
app.use('/user', userRouter);
app.use('/suggestion', suggestionRouter);

app.listen(process.env.PORT || PORT);