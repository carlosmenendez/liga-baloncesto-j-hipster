'use strict';

angular.module('ligaBaloncestoJHipsterApp')
    .controller('ArbitroController', function ($scope, $state, $modal, Arbitro) {
      
        $scope.arbitros = [];
        $scope.loadAll = function() {
            Arbitro.query(function(result) {
               $scope.arbitros = result;
            });
        };
        $scope.loadAll();


        $scope.refresh = function () {
            $scope.loadAll();
            $scope.clear();
        };

        $scope.clear = function () {
            $scope.arbitro = {
                nombre: null,
                id: null
            };
        };
    });
