'use strict';

angular.module('ligaBaloncestoJHipsterApp')
    .controller('EquipoDetailController', function ($scope, $rootScope, $stateParams, entity, Equipo) {
        $scope.equipo = entity;
        $scope.load = function (id) {
            Equipo.get({id: id}, function(result) {
                $scope.equipo = result;
            });
        };
        var unsubscribe = $rootScope.$on('ligaBaloncestoJHipsterApp:equipoUpdate', function(event, result) {
            $scope.equipo = result;
        });
        $scope.$on('$destroy', unsubscribe);

    });