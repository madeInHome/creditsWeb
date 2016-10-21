// Adicionamos a creditsApp,
creditsApp.factory('clientRegisterService', clientRegisterService); 

clientRegisterService.$inject = ['$http'];

function clientRegisterService($http) {

	var service = {
		getListIdType: getListIdType,
		register: registerFunction
	};
	return service;

	function getListIdType() {
		//var listIdTypes = [{"id": 1, "name": "Cédula"}, {"id": 2, "name": "Nit"}, {"id": 3, "name": "Cédula extranjería"}];
		//return listIdTypes;

		return $http({
            method: 'GET',
            url: 'https://baas.kinvey.com/appdata/kid_ryc2C7iC/idTypes',
            // pass in data as strings
            headers: {'Authorization': 'Basic a2lkX3J5YzJDN2lDOjRkYmE1ZGYxODMxNzRmZmE4MjlkODg3ZmYyNDhjYmM4', 'X-Kinvey-API-Version': '3'}  // set the headers so angular passing info as form data (not request payload)
        }).then(completeSuccess).catch(completeFail);

        	function completeSuccess(response){
		      	var responseEntregado = response;
		    	return response.data;
		    }

		    function completeFail(error){
		      return error;
		    }

	};

	function registerFunction(username, password) {
		return "ok";
	};
}