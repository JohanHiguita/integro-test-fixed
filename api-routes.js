
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
var estudianteController = require('./estudianteController');

// estudiante routes
router.route('/estudiantes')
	  .get(estudianteController.index)
	  .post(estudianteController.new);

router.route('/estudiantes/:id')
	  .get(estudianteController.view)
      .patch(estudianteController.update)
      .put(estudianteController.update)
      .delete(estudianteController.delete);

// Export API routes
module.exports = router;
