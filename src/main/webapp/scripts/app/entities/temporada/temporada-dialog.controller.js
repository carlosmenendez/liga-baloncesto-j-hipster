'use strict';

angular.module('ligaBaloncestoJHipsterApp').controller('TemporadaDialogController',
    ['$scope', '$stateParams', '$modalInstance', 'entity', 'Temporada',
        function($scope, $stateParams, $modalInstance, entity, Temporada) {

        $scope.temporada = entity;
        $scope.load = function(id) {
            Temporada.get({id : id}, function(result) {
                $scope.temporada = result;
            });
        };

        var onSaveSuccess = function (result) {
            $scope.$emit('ligaBaloncestoJHipsterApp:temporadaUpdate', result);
            $modalInstance.close(result);
            $scope.isSaving = false;
        };

        var onSaveError = function (result) {
            $scope.isSaving = false;
        };

        $scope.save = function () {
            $scope.isSaving = true;
            if ($scope.temporada.id != null) {
                Temporada.update($scope.temporada, onSaveSuccess, onSaveError);
            } else {
                Temporada.save($scope.temporada, onSaveSuccess, onSaveError);
            }
        };

        $scope.clear = function() {
            $modalInstance.dismiss('cancel');
        };
}]);
