
const express = require('express');
const cron = require('./cron');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

cron.start();

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));