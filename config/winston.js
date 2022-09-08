const { createLogger, format, transports } = require('winston');

module.exports = createLogger({
    format: format.combine(
        format.simple(),
        format.timestamp(),
        format.printf(info=>`[${info.timestamp}] - ${info.level} : ${info.message}`)
    ),
    transports: [
        new transports.Console({ level: 'info'}),
        new transports.File({ filename: `${__dirname}/../logs/warning.log`, level: "warn" }),
        new transports.File({ filename: `${__dirname}/../logs/error.log`, level: "error" }),
    ]
});
