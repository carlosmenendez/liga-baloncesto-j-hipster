'use strict';

angular.module('ligaBaloncestoJHipsterApp').controller('EquipoDialogController',
    ['$scope', '$stateParams', '$modalInstance', 'entity', 'Equipo',
        function($scope, $stateParams, $modalInstance, entity, Equipo) {

        $scope.equipo = entity;
        $scope.equipos = Equipo.query();
        $scope.load = function(id) {
            Equipo.get({id : id}, function(result) {
                $scope.equipo = result;
            });
        };

        var onSaveSuccess = function (result) {
            $scope.$emit('ligaBaloncestoJHipsterApp:equipoUpdate', result);
            $modalInstance.close(result);
            $scope.isSaving = false;
        };

        var onSaveError = function (result) {
            $scope.isSaving = false;
        };

        $scope.save = function () {
            $scope.isSaving = true;
            if ($scope.equipo.id != null) {
                Equipo.update($scope.equipo, onSaveSuccess, onSaveError);
            } else {
                Equipo.save($scope.equipo, onSaveSuccess, onSaveError);
            }
        };

        $scope.clear = function() {
            $modalInstance.dismiss('cancel');
        };
}]);
