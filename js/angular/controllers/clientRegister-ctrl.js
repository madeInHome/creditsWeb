// A la variable creditsApp (que se comporta como un arreglo) le agregamos un arreglo (controller) 
creditsApp.controller('ClientRegisterCtrl', ClientRegisterCtrl);


ClientRegisterCtrl.$inject = ['$scope', '$state','clientRegisterService'];

function ClientRegisterCtrl($scope, $state, clientRegisterService) {

	init();

    function init() {
    	clientRegisterService.getListIdType().then(function(data){
    			var idTypes= data;
    			$scope.listIdTypes = idTypes;
    	}).catch(function(error){

    	});
    	
    }

    $scope.register = function() {
	}

}