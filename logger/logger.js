const {createLogger, transports, format} = require('winston');

// ------ Logging function -----

const itemLogger = createLogger({
    transports:[
        new transports.File({
            filename:'item.log',
            level:'info',
            format:format.combine(format.timestamp(),format.json())
        }),
        new transports.File({
            filename:'item-error.log',
            level:'error',
            format:format.combine(format.timestamp(),format.json())
        }),
    ]
})

module.exports = {itemLogger}