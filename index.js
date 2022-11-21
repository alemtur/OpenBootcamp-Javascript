const winston = require('winston');// Forma de importar el modulos (modulos)

const logger = winston.createLogger({
  level: 'error',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

function errorPersonalizado(){
    try {
        resultado = 1 + a;
        console.log(resultado);
    } catch(e) {
        logger.error(`Este es un mensaje de error personalizado. El error es ${e.error}`);     
    }        
}

errorPersonalizado();
