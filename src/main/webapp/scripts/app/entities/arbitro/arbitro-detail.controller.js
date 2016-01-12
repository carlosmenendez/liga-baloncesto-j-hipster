'use strict';

angular.module('ligaBaloncestoJHipsterApp')
    .controller('ArbitroDetailController', function ($scope, $rootScope, $stateParams, entity, Arbitro) {
        $scope.arbitro = entity;
        $scope.load = function (id) {
            Arbitro.get({id: id}, function(result) {
                $scope.arbitro = result;
            });
        };
        var unsubscribe = $rootScope.$on('ligaBaloncestoJHipsterApp:arbitroUpdate', function(event, result) {
            $scope.arbitro = result;
        });
        $scope.$on('$destroy', unsubscribe);

    });
