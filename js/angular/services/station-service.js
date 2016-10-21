// Adicionamos a creditsApp, stationService, para invocarlo desde los controller en donde lo necesitemos.
creditsApp.factory('stationService', stationService); 

stationService.$inject = [];

function stationService() {

    var service = {
        getAll: getAll,
        getStationPrograms: getStationPrograms
    };

    var stations = [{"id": 1, "name": "La x"}, {"id": 2, "name": "Radio activa"}];
    var programs = [{"id": 1, "name": "El gallo", "stationId": "2"}, {"id": 2, "name": "El perezoso", "stationId": "2"}, {"id": 3, "name": "El diario", "stationId": "1"}];

    return service;

    function getAll() {
    	return stations;
    };

    function getStationPrograms(stationId) {
        var programList = [];

        for (var i = 0; i < programs.length; i++){
            var program = programs[i];
            if(angular.equals(program.stationId,stationId)){
                programList.push(program);
            }
        
        }

        return programList;

    };
}