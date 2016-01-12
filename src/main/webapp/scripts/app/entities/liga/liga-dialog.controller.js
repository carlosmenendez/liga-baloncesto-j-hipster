'use strict';

angular.module('ligaBaloncestoJHipsterApp').controller('LigaDialogController',
    ['$scope', '$stateParams', '$modalInstance', 'entity', 'Liga',
        function($scope, $stateParams, $modalInstance, entity, Liga) {

        $scope.liga = entity;
        $scope.load = function(id) {
            Liga.get({id : id}, function(result) {
                $scope.liga = result;
            });
        };

        var onSaveSuccess = function (result) {
            $scope.$emit('ligaBaloncestoJHipsterApp:ligaUpdate', result);
            $modalInstance.close(result);
            $scope.isSaving = false;
        };

        var onSaveError = function (result) {
            $scope.isSaving = false;
        };

        $scope.save = function () {
            $scope.isSaving = true;
            if ($scope.liga.id != null) {
                Liga.update($scope.liga, onSaveSuccess, onSaveError);
            } else {
                Liga.save($scope.liga, onSaveSuccess, onSaveError);
            }
        };

        $scope.clear = function() {
            $modalInstance.dismiss('cancel');
        };
}]);
