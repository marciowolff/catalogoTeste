/*global app*/

'use strict';

app.controller('MainController', ['$scope', '$rootScope', '$location', 'Alert', 'timesAPIServices', '$window', function ($scope, $rootScope, $location, Alert, timesAPIServices, $window) {


  	$scope.allInfos = Alert.allInfos;
	Alert.clearMessage();

	$rootScope.goBack = function(){
    	$window.history.back();
  	};

  	$scope.openSerie = function(serie){
    	if($location.path() !== '/'){
	      $rootScope.serie = serie;
	      $location.path('/');
	    };

	    timesAPIServices.series()
	      .success(function (data) {
	        data.series.map(function(series){
	          if(series.nome === serie.id){
	            $scope.tituloSerie = serie.titulo;
	            $scope.times = series.times;
	          };
	        });       
	      })
	      .error(function (err){
	        Alert.addMessageError('', 'Times não encontrado.');
	      });
	};
}]);
