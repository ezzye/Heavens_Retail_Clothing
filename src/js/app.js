  angular.module('Heavens', [
  'ngRoute',
  'mobile-angular-ui',
  'Heavens.controllers.Main'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl:'home.html', reloadOnSearch: false})
  .when('/home', {templateUrl:'home.html', reloadOnSearch: false})
  .when('/wfoot', {templateUrl:'wfoot.html', reloadOnSearch: false})
  .when('/mfoot', {templateUrl:'mfoot.html', reloadOnSearch: false})
  .when('/wcasual', {templateUrl:'wcasual.html', reloadOnSearch: false})
  .when('/mcasual', {templateUrl:'mcasual.html', reloadOnSearch: false})
  .when('/wformal', {templateUrl:'wformal.html', reloadOnSearch: false})
  .when('/mformal', {templateUrl:'mformal.html', reloadOnSearch: false})
   .when('/basket', {templateUrl:'basket.html', reloadOnSearch: false})
  .otherwise({redirectTo:'/', reloadOnSearch: false});
});