// Import curso and nota model
Curso = require('../models/cursoModel');
Nota = require('../models/notaModel');

// Handle index actions
exports.index = function (req, res) {
    Curso.get(function (err, cursos) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Cursos recuperados exitosamente",
            data: cursos
        });
    });
};

// Handle create curso actions
exports.new = function (req, res) {
    var curso = new Curso();
    curso.Nombre = req.body.Nombre ? req.body.Nombre : curso.Nombre;

    // save the curso and check for errors
    curso.save(function (err) {
        if (err){
            res.json(err);
        }else{
            res.json({
                message: 'Nuevo curso creado!',
                data: curso
            });    
        }
        
    });
};

// Handle view curso info
exports.view = function (req, res) {
    Curso.findById(req.params.id, function (err, curso) {
        if (err)
            res.send(err);
        res.json({
            message: 'Cargando datos del curso',
            data: curso
        });
    });
};
// Handle update curso info
exports.update = function (req, res) {
    Curso.findById(req.params.id, function (err, curso) {
        if (err)
            res.send(err);
        curso.Nombre = req.body.Nombre ? req.body.Nombre : curso.Nombre;
        
    // save the curso and check for errors

    curso.save(function (err) {
        if (err){
            res.json(err);
        }else {
            res.json({
                message: 'Información de curso Actualizada!',
                data: curso
            });    
        }
    });
});
};
// Handle delete curso
exports.delete = function (req, res) {
    Curso.deleteOne({
        _id: req.params.id
    }, function (err, curso) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Curso y notas asociadas eliminadas'
        });
    });

    Nota.deleteMany({ IdCurso: req.params.id}, function (err) {
        if (err)
            res.send(err);
    });
};
