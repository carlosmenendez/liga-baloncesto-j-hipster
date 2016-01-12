'use strict';

angular.module('ligaBaloncestoJHipsterApp')
	.controller('JugadorDeleteController', function($scope, $modalInstance, entity, Jugador) {

        $scope.jugador = entity;
        $scope.clear = function() {
            $modalInstance.dismiss('cancel');
        };
        $scope.confirmDelete = function (id) {
            Jugador.delete({id: id},
                function () {
                    $modalInstance.close(true);
                });
        };

    });