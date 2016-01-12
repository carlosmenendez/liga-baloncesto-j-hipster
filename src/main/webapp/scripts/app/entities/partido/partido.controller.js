'use strict';

angular.module('ligaBaloncestoJHipsterApp')
    .controller('PartidoController', function ($scope, $state, $modal, Partido) {
      
        $scope.partidos = [];
        $scope.loadAll = function() {
            Partido.query(function(result) {
               $scope.partidos = result;
            });
        };
        $scope.loadAll();


        $scope.refresh = function () {
            $scope.loadAll();
            $scope.clear();
        };

        $scope.clear = function () {
            $scope.partido = {
                fechaPartido: null,
                id: null
            };
        };
    });
