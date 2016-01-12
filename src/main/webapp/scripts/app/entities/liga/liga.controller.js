'use strict';

angular.module('ligaBaloncestoJHipsterApp')
    .controller('LigaController', function ($scope, $state, $modal, Liga) {
      
        $scope.ligas = [];
        $scope.loadAll = function() {
            Liga.query(function(result) {
               $scope.ligas = result;
            });
        };
        $scope.loadAll();


        $scope.refresh = function () {
            $scope.loadAll();
            $scope.clear();
        };

        $scope.clear = function () {
            $scope.liga = {
                nombre: null,
                id: null
            };
        };
    });
