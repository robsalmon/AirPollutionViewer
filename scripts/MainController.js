(function(){
    var MainController = function($scope, $http) {

        var onLoad = function(response) {
    
            $scope.pollutionData = response.data;
            $scope.sites = response.data.DailyAirQualityIndex.LocalAuthority.Site;
        
        };
    
        var onError = function(reason) {
            $scope.error = reason;
    
        };
    
        $scope.getData = function() {
    
    $http.get("http://api.erg.kcl.ac.uk/AirQuality/Daily/MonitoringIndex/Latest/LocalAuthorityId=32/Json")
    .then(onLoad, onError);
        };
    
       
    
    };
    app.controller("MainController", MainController);    

}());