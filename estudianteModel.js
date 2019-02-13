var mongoose = require('mongoose');
// Setup schema
var estudianteSchema = mongoose.Schema({
    Nombre: {
        type: String,
        required: true
    },
    Edad: {
        type: Number,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export Estudiante model
var Estudiante = module.exports = mongoose.model('estudiante', estudianteSchema);
module.exports.get = function (callback, limit) {
    Estudiante.find(callback).limit(limit);
}