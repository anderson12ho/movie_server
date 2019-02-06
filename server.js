const express = require('express');
const bodyParser = require('body-parser');

const router = require('./routes');
const app = express();

app.use(bodyParser.json());
app.use(router);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`app started on port ${port}`));
