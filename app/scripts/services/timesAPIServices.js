/*global services*/

'use strict';

services.factory('timesAPIServices', [ '$http', function ($http) {
  delete $http.defaults.headers.common['X-Requested-With'];
  return{
    series: function(){
      return $http({
        method: 'GET',
        headers: {
          'Content-type': 'application/json'
        },
        url: 'scripts/services/mock/series.json',
        withCredentials: true
      });
    },
    escalacao: function(idTime){
      return $http({
        method: 'GET',
        headers: {
          'Content-type': 'application/json'
        },
        url: 'scripts/services/mock/escalacoes/'+idTime+'.json',
        withCredentials: true
      });
    },
    jogador: function(jogador){
      return $http({
        method: 'GET',
        headers: {
          'Content-type': 'application/json'
        },
        url: 'scripts/services/mock/perfil.json',
        withCredentials: true
      });
    }
  }
}]);
