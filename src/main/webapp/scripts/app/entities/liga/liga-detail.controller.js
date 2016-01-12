'use strict';

angular.module('ligaBaloncestoJHipsterApp')
    .controller('LigaDetailController', function ($scope, $rootScope, $stateParams, entity, Liga) {
        $scope.liga = entity;
        $scope.load = function (id) {
            Liga.get({id: id}, function(result) {
                $scope.liga = result;
            });
        };
        var unsubscribe = $rootScope.$on('ligaBaloncestoJHipsterApp:ligaUpdate', function(event, result) {
            $scope.liga = result;
        });
        $scope.$on('$destroy', unsubscribe);

    });
