/*global app*/

'use strict';

app.controller('HomeController', ['$scope', function ($scope) {
  	$scope.detalhe = function(time){
		$location.path('/time/'+time.id);
	};
}]);
