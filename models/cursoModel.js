var mongoose = require('mongoose');
// Setup schema
var cursoSchema = mongoose.Schema({
    Nombre: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export Curso model
var Curso = module.exports = mongoose.model('curso', cursoSchema);
module.exports.get = function (callback, limit) {
    Curso.find(callback).limit(limit);
}