const { format } = require('date-fns');

function formatoFecha(fecha) {
  return format(fecha, 'yyyy-MM-dd');
}

module.exports = formatoFecha;

