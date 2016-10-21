// Adicionamos a creditsApp,
creditsApp.factory('registerService', registerService); 

registerService.$inject = [];

function registerService() {

	var service = {
		register: registerFunction
	};
	return service;

	function registerFunction(username, password) {
		return "ok";
	};
}