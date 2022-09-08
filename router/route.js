const {Router} = require('express')
const routerYarg = Router();
const forkRandom = require('../controller/yargsController')

//router.get('/info', getInfoFromPC);

routerYarg.get('/api/randoms', forkRandom); 

module.exports = routerYarg;
