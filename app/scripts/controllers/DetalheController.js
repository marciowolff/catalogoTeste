/*global app*/

'use strict';

app.controller('DetalheController', ['$scope', '$rootScope', '$location', '$route', 'timesAPIServices', 'Alert', function ($scope, $rootScope, $location, $route, timesAPIServices, Alert) {
	
	$scope.allInfos = Alert.allInfos;
	Alert.clearMessage();

	$scope.$watch('posicaoselecionada', function(){
		$scope.perfil = '';
		$scope.jogadores = ($scope.posicaoselecionada ? $scope.posicaoselecionada : '');
	});

	$scope.openPerfil = function(jogador, jogadores){
		timesAPIServices.jogador(jogador)
			.success(function (data) {
				$scope.perfil = data.detalhe;
				$scope.perfil.nome = jogador.nome;
				$scope.perfil.posicao = jogadores.posicao;
	      	})
	      	.error(function (err){
	      		Alert.addMessageError('', 'Detalhe do jogador não encontrado.');
	      	});		
	};


	$scope.init = function() {
		$scope.showGoBack = true;

		timesAPIServices.escalacao($route.current.params.time)
			.success(function (data) {
				$scope.time = data;
	      	})
	      	.error(function (err){
	      		Alert.addMessageError('', 'Elenco não encontrado.');
	      	});		
	};

	$scope.init();

}]);
