
// Initialize express router
let router = require('express').Router();

// Set default API response
router.get('/', function (req, res) {
	res.json({
		status: 'API Its Working',
		message: 'Integ.ro API!',
	});
});

// Import controllers
var estudianteController = require('./controllers/estudianteController');
var cursoController = require('./controllers/cursoController');
var notaController = require('./controllers/notaController');

// estudiante routes
router.route('/estudiantes')
	  .get(estudianteController.index)
	  .post(estudianteController.new);

router.route('/estudiantes/:id')
	  .get(estudianteController.view)
      .patch(estudianteController.update)
      .put(estudianteController.update)
      .delete(estudianteController.delete);

// curso routes
router.route('/cursos')
	  .get(cursoController.index)
	  .post(cursoController.new);

router.route('/cursos/:id')
	  .get(cursoController.view)
      .patch(cursoController.update)
      .put(cursoController.update)
      .delete(cursoController.delete);


// Nota routes
router.route('/notas')
	  .get(notaController.index)
	  .post(notaController.new);

router.route('/notas/:id')
	  .get(notaController.notasEstudiante)
      .patch(notaController.update)
      .put(notaController.update)
      .delete(notaController.delete);

router.route('/notas/show/:id')
	  .get(notaController.view);	

// Export API routes
module.exports = router;
