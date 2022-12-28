const express = require('express');
const app = express();

const API_VERSION = 'v1'


app.use(`/${API_VERSION}/user`, require('./user'));
app.use(`/${API_VERSION}/post`, require("./post"));
app.use(`/${API_VERSION}/albums`, require("./album"));

module.exports = app;
