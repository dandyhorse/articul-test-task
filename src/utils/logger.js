const moment = require('moment');
const fs = require('fs');

function logger(req, res, next) {
  const startTime = Date.now();
  const now = moment().format('YY:DD:MM HH:mm:ss');

  req.on('close', () => {
    const requestTime = Date.now() - startTime;

    const log = `TIME ON SERVER: [${now}] ENDPOINT: [${req.method} ${req.originalUrl}] DURATION: ${requestTime} MS \n`;

    fs.appendFile('logs.txt', log, { flag: 'a+' }, (err) => {
      if (err) {
        console.log(err);
      }
    });
  });

  next();
}

module.exports = {
  logger,
};
