/*global app*/
'use strict';


// Directive for Header
app.directive('appHeader', [function() {
  return {
    restrict: 'AE',
    replace: true,
    templateUrl: 'partials/header.html',
    link: function(scope){
      scope.series = [
        {titulo: 'Série A', id:'A'},
        {titulo: 'Série B', id:'B'},
      ];
    }
  };
}]);


// Directive for Footer
app.directive('appFooter', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'partials/footer.html'
  };
});

app.directive('messages', function() {
  return {
    controller: '',
    restrict: 'EA', // E = Element, A = Attribute, C = Class, M = Comment
    templateUrl: 'partials/messages.html'
  };
});