var mongoose = require('mongoose');
// Setup schema
var notaSchema = mongoose.Schema({
    IdEstudiante: {
        type: String,
        required: true
    },
    IdCurso: {
        type: String,
        required: true
    },
    NombreEvaluacion: {
        type: String,
        required: true
    },
    Calificacion: {
        type: Number,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export Nota model
var Nota = module.exports = mongoose.model('nota', notaSchema);
module.exports.get = function (callback, limit) {
    Nota.find(callback).limit(limit);
}