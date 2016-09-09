/*global app*/

'use strict';

app.controller('HomeController', ['$scope', '$location', function ($scope, $location) {
  	$scope.detalhe = function(time){
		$location.path('/time/'+time.id);
	};
}]);
