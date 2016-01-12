'use strict';

angular.module('ligaBaloncestoJHipsterApp')
    .controller('JugadorController', function ($scope, $state, $modal, Jugador) {
      
        $scope.jugadors = [];
        $scope.loadAll = function() {
            Jugador.query(function(result) {
               $scope.jugadors = result;
            });
        };
        $scope.loadAll();


        $scope.refresh = function () {
            $scope.loadAll();
            $scope.clear();
        };

        $scope.clear = function () {
            $scope.jugador = {
                nombre: null,
                fechaNacimiento: null,
                canastasTotales: null,
                rebotesTotales: null,
                asistenciasTotales: null,
                posicion: null,
                id: null
            };
        };
    });
