var Konva = require('./_CoreInternals').Konva;
// add Konva to global variable
Konva._injectGlobal(Konva);
exports['default'] = Konva;
Konva.default = Konva;
module.exports = exports['default'];