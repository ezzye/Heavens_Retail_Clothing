'use strict';

describe('Heavens module', function() {

  beforeEach(module('Heavens'));

  var $controller;

  beforeEach(inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  describe('Heavens controller', function(){

    beforeEach(function() {
      $scope ={};
      controller = $controller('HeavensController', {$scope: $scope});
    });

    it();

  });
});