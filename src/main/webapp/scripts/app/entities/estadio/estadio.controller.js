'use strict';

angular.module('ligaBaloncestoJHipsterApp')
    .controller('EstadioController', function ($scope, $state, $modal, Estadio) {
      
        $scope.estadios = [];
        $scope.loadAll = function() {
            Estadio.query(function(result) {
               $scope.estadios = result;
            });
        };
        $scope.loadAll();


        $scope.refresh = function () {
            $scope.loadAll();
            $scope.clear();
        };

        $scope.clear = function () {
            $scope.estadio = {
                nombre: null,
                localidad: null,
                id: null
            };
        };
    });
