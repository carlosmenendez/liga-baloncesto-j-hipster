'use strict';

angular.module('ligaBaloncestoJHipsterApp')
    .controller('TemporadaController', function ($scope, $state, $modal, Temporada) {
      
        $scope.temporadas = [];
        $scope.loadAll = function() {
            Temporada.query(function(result) {
               $scope.temporadas = result;
            });
        };
        $scope.loadAll();


        $scope.refresh = function () {
            $scope.loadAll();
            $scope.clear();
        };

        $scope.clear = function () {
            $scope.temporada = {
                nombre: null,
                tumadre: null,
                id: null
            };
        };
    });
