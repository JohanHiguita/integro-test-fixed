// Import nota model
Nota = require('../models/notaModel');
// Handle index actions
exports.index = function (req, res) {
    Nota.get(function (err, notas) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Notas recuperadas exitosamente",
            data: notas
        });
    });
};

// Handle create nota actions
exports.new = function (req, res) {
    var nota = new Nota();
    nota.IdEstudiante = req.body.IdEstudiante ? req.body.IdEstudiante : nota.IdEstudiante;
    nota.IdCurso = req.body.IdCurso ? req.body.IdCurso : nota.IdCurso;
    nota.NombreEvaluacion = req.body.NombreEvaluacion ? req.body.NombreEvaluacion : nota.NombreEvaluacion;
    nota.Calificacion = req.body.Calificacion ? req.body.Calificacion : nota.Calificacion;
    
    
    // save Nota and check for errors
    nota.save(function (err) {
        if (err){
            res.json(err);
        }else{
            res.json({
                message: 'Nueva nota creada!',
                data: nota
            });    
        }
        
    });
};

// Handle view nota info
exports.view = function (req, res) {
    Nota.findById(req.params.id, function (err,nota) {
        if (err)
            res.send(err);
        res.json({
            message: 'Cargando datos de la nota',
            data:nota
        });
    });
};
// Handle update Nota info
exports.update = function (req, res) {
    Nota.findById(req.params.id, function (err, nota) {
        if (err)
            res.send(err);
        nota.IdEstudiante = req.body.IdEstudiante ? req.body.IdEstudiante : nota.IdEstudiante;
        nota.IdCurso = req.body.IdCurso ? req.body.IdCurso : nota.IdCurso;
        nota.NombreEvaluacion = req.body.NombreEvaluacion ? req.body.NombreEvaluacion : nota.NombreEvaluacion;
        nota.Calificacion = req.body.Calificacion ? req.body.Calificacion : nota.Calificacion;
        
    // save the Nota and check for errors

    nota.save(function (err) {
        if (err){
            res.json(err);
        }else {
            res.json({
                message: 'Información de la nota Actualizada!',
                data: nota
            });    
        }
    });
});
};
// Handle delete nota
exports.delete = function (req, res) {
    Nota.deleteOne({
        _id: req.params.id
    }, function (err, nota) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Nota eliminada'
        });
    });
};
