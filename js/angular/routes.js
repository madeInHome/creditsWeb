creditsApp.config(function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise("/index");
  
  $stateProvider
    .state('index', {
      url: "/index",
      views: {
            // for column two, we'll define a separate controller 
            'loginLayout@index': { 
                templateUrl: 'login.html'
            }
        }
    })
    .state('login', {
      url: "/login",
      templateUrl: "login.html"
    })
    .state('clientRegister', {
      url: "/clientRegister",
      templateUrl: "templates/clientRegister.html"
    })
    .state('list', {
      url: "/list",
      templateUrl: "templates/list.html"
    })
    .state('welcome', {
      url: "/welcome",
      templateUrl: "templates/welcome.html"
    })
    .state('contacts', {
      url: "/contacts",
      templateUrl: "templates/contacts.html"
    })
    .state('listStations', {
      url: "/listStations",
      templateUrl: "templates/listStations.html"
    })
    .state('listPrograms', {
      url: "/listPrograms/:stationId",
      templateUrl: "templates/listPrograms.html"
    });

});