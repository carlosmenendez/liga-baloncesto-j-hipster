'use strict';

angular.module('ligaBaloncestoJHipsterApp')
    .controller('TemporadaDetailController', function ($scope, $rootScope, $stateParams, entity, Temporada) {
        $scope.temporada = entity;
        $scope.load = function (id) {
            Temporada.get({id: id}, function(result) {
                $scope.temporada = result;
            });
        };
        var unsubscribe = $rootScope.$on('ligaBaloncestoJHipsterApp:temporadaUpdate', function(event, result) {
            $scope.temporada = result;
        });
        $scope.$on('$destroy', unsubscribe);

    });
