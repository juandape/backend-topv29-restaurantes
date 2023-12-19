// import express from 'express';
// import { createServer } from 'http';

// import expressConfig from './src/config/express';
// import routes from './src/routes';

const express = require('express');
const { createServer } = require('http');
const expressConfig = require('./src/config/express');
const routes = require('./src/routes');

// setup server
const app = express();
export const server = createServer(app);
// setup express
expressConfig(app);
// routes
routes(app);


module.exports = app;
