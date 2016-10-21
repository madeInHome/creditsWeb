// A la variable creditsApp (que se comporta como un arreglo) le agregamos un arreglo (controller) 
creditsApp.controller('MasterCtrl', MasterCtrl);


  MasterCtrl.$inject = ['$scope', '$state'];

  function MasterCtrl($scope, $state) {
    $scope.goto = function(url) {
    	alert('Go to: ' + url);
      $state.go(url);
    }

  }