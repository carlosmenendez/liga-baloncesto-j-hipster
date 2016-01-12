'use strict';

angular.module('ligaBaloncestoJHipsterApp')
    .controller('EntrenadorController', function ($scope, $state, $modal, Entrenador) {
      
        $scope.entrenadors = [];
        $scope.loadAll = function() {
            Entrenador.query(function(result) {
               $scope.entrenadors = result;
            });
        };
        $scope.loadAll();


        $scope.refresh = function () {
            $scope.loadAll();
            $scope.clear();
        };

        $scope.clear = function () {
            $scope.entrenador = {
                nombre: null,
                fechaNacimiento: null,
                id: null
            };
        };
    });
