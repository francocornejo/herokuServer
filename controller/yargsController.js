const { fork } = require('child_process');
const path = require('path')

const forkRandom = (req, res, next) => {
    try {
      let cant = req.query.cantidad;
  
      if (!cant) {
        cant = 1E8;
      }
      
      const forked = fork(path.join(__dirname, '../apis/numeroRandom.js'));
  
      forked.on('message', (numeros) => {
        if (numeros === 'ready') {
          forked.send(cant);
        } else {
          res.status(200).json({ resultado: numeros });
        }
      });
    } catch (err) {
      next(err);
    }
  }

  module.exports = forkRandom