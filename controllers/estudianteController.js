// Import estudiante model
Estudiante = require('../models/estudianteModel');
// Handle index actions
exports.index = function (req, res) {
    Estudiante.get(function (err, estudiantes) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Estudiantes recuperados exitosamente",
            data: estudiantes
        });
    });
};

// Handle create estudiante actions
exports.new = function (req, res) {
    var estudiante = new Estudiante();
    estudiante.Nombre = req.body.Nombre ? req.body.Nombre : estudiante.Nombre;
    estudiante.Edad = req.body.Edad;

    // save the estudiante and check for errors
    estudiante.save(function (err) {
        if (err){
            res.json(err);
        }else{
            res.json({
                message: 'Nuevo estudiante creado!',
                data: estudiante
            });    
        }
        
    });
};

// Handle view estudiante info
exports.view = function (req, res) {
    Estudiante.findById(req.params.id, function (err, estudiante) {
        if (err)
            res.send(err);
        res.json({
            message: 'Cargando datos del estudiante',
            data: estudiante
        });
    });
};
// Handle update estudiante info
exports.update = function (req, res) {
    Estudiante.findById(req.params.id, function (err, estudiante) {
        if (err)
            res.send(err);
        estudiante.Nombre = req.body.Nombre ? req.body.Nombre : estudiante.Nombre;
        estudiante.Edad = req.body.Edad;
        
    // save the estudiante and check for errors

    estudiante.save(function (err) {
        if (err){
            res.json(err);
        }else {
            res.json({
                message: 'Información de estudiante Actualizada!',
                data: estudiante
            });    
        }
    });
});
};
// Handle delete estudiante
exports.delete = function (req, res) {
    Estudiante.deleteOne({
        _id: req.params.id
    }, function (err, estudiante) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Estudiante eliminado'
        });
    });
};
