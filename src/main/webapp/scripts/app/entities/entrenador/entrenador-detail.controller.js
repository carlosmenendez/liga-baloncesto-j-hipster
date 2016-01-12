'use strict';

angular.module('ligaBaloncestoJHipsterApp')
    .controller('EntrenadorDetailController', function ($scope, $rootScope, $stateParams, entity, Entrenador) {
        $scope.entrenador = entity;
        $scope.load = function (id) {
            Entrenador.get({id: id}, function(result) {
                $scope.entrenador = result;
            });
        };
        var unsubscribe = $rootScope.$on('ligaBaloncestoJHipsterApp:entrenadorUpdate', function(event, result) {
            $scope.entrenador = result;
        });
        $scope.$on('$destroy', unsubscribe);

    });
