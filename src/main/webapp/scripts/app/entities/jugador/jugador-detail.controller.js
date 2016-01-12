'use strict';

angular.module('ligaBaloncestoJHipsterApp')
    .controller('JugadorDetailController', function ($scope, $rootScope, $stateParams, entity, Jugador) {
        $scope.jugador = entity;
        $scope.load = function (id) {
            Jugador.get({id: id}, function(result) {
                $scope.jugador = result;
            });
        };
        var unsubscribe = $rootScope.$on('ligaBaloncestoJHipsterApp:jugadorUpdate', function(event, result) {
            $scope.jugador = result;
        });
        $scope.$on('$destroy', unsubscribe);

    });
