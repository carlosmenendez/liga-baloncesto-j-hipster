'use strict';

angular.module('ligaBaloncestoJHipsterApp')
    .controller('PartidoDetailController', function ($scope, $rootScope, $stateParams, entity, Partido) {
        $scope.partido = entity;
        $scope.load = function (id) {
            Partido.get({id: id}, function(result) {
                $scope.partido = result;
            });
        };
        var unsubscribe = $rootScope.$on('ligaBaloncestoJHipsterApp:partidoUpdate', function(event, result) {
            $scope.partido = result;
        });
        $scope.$on('$destroy', unsubscribe);

    });
