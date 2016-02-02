angular.module('Heavans', [
  'ngRoute',
  'mobile-angular-ui',
  'Heavans.controllers.Main'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl:'home.html',  reloadOnSearch: false});
});