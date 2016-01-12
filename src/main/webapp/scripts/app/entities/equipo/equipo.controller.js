'use strict';

angular.module('ligaBaloncestoJHipsterApp')
    .controller('EquipoController', function ($scope, $state, $modal, Equipo) {
      
        $scope.equipos = [];
        $scope.loadAll = function() {
            Equipo.query(function(result) {
               $scope.equipos = result;
            });
        };
        $scope.loadAll();


        $scope.refresh = function () {
            $scope.loadAll();
            $scope.clear();
        };

        $scope.clear = function () {
            $scope.equipo = {
                nombre: null,
                fechaFundacion: null,
                localidad: null,
                tumadre: null,
                id: null
            };
        };
    });
