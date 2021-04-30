const {Router} = require('express');
const {renderIndex, renderAbout} = require('../controller/index.controller');
const router = require('./product.routes');
const routes = Router();

routes.get('/',renderIndex);

routes.get('/about',renderAbout);



module.exports = routes;