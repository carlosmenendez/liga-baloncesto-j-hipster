'use strict';

angular.module('ligaBaloncestoJHipsterApp').controller('EstadioDialogController',
    ['$scope', '$stateParams', '$modalInstance', 'entity', 'Estadio',
        function($scope, $stateParams, $modalInstance, entity, Estadio) {

        $scope.estadio = entity;
        $scope.load = function(id) {
            Estadio.get({id : id}, function(result) {
                $scope.estadio = result;
            });
        };

        var onSaveSuccess = function (result) {
            $scope.$emit('ligaBaloncestoJHipsterApp:estadioUpdate', result);
            $modalInstance.close(result);
            $scope.isSaving = false;
        };

        var onSaveError = function (result) {
            $scope.isSaving = false;
        };

        $scope.save = function () {
            $scope.isSaving = true;
            if ($scope.estadio.id != null) {
                Estadio.update($scope.estadio, onSaveSuccess, onSaveError);
            } else {
                Estadio.save($scope.estadio, onSaveSuccess, onSaveError);
            }
        };

        $scope.clear = function() {
            $modalInstance.dismiss('cancel');
        };
}]);
