module.exports = function(app) {
	
	var controller = app.controllers.route;
	
	app.route('/route')
		.get(controller.listRoutes)
		.post(controller.addRoute);
	app.route('/route/:id')
		.get(controller.listRoute)
		.post(controller.addRoute)
		.delete(controller.removeRoute);
};