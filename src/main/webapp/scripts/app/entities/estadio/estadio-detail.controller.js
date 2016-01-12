'use strict';

angular.module('ligaBaloncestoJHipsterApp')
    .controller('EstadioDetailController', function ($scope, $rootScope, $stateParams, entity, Estadio) {
        $scope.estadio = entity;
        $scope.load = function (id) {
            Estadio.get({id: id}, function(result) {
                $scope.estadio = result;
            });
        };
        var unsubscribe = $rootScope.$on('ligaBaloncestoJHipsterApp:estadioUpdate', function(event, result) {
            $scope.estadio = result;
        });
        $scope.$on('$destroy', unsubscribe);

    });
