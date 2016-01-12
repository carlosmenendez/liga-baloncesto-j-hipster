'use strict';

angular.module('ligaBaloncestoJHipsterApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('entrenador', {
                parent: 'entity',
                url: '/entrenadors',
                data: {
                    authorities: ['ROLE_USER'],
                    pageTitle: 'Entrenadors'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/entrenador/entrenadors.html',
                        controller: 'EntrenadorController'
                    }
                },
                resolve: {
                }
            })
            .state('entrenador.detail', {
                parent: 'entity',
                url: '/entrenador/{id}',
                data: {
                    authorities: ['ROLE_USER'],
                    pageTitle: 'Entrenador'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/entrenador/entrenador-detail.html',
                        controller: 'EntrenadorDetailController'
                    }
                },
                resolve: {
                    entity: ['$stateParams', 'Entrenador', function($stateParams, Entrenador) {
                        return Entrenador.get({id : $stateParams.id});
                    }]
                }
            })
            .state('entrenador.new', {
                parent: 'entrenador',
                url: '/new',
                data: {
                    authorities: ['ROLE_USER'],
                },
                onEnter: ['$stateParams', '$state', '$modal', function($stateParams, $state, $modal) {
                    $modal.open({
                        templateUrl: 'scripts/app/entities/entrenador/entrenador-dialog.html',
                        controller: 'EntrenadorDialogController',
                        size: 'lg',
                        resolve: {
                            entity: function () {
                                return {
                                    nombre: null,
                                    fechaNacimiento: null,
                                    id: null
                                };
                            }
                        }
                    }).result.then(function(result) {
                        $state.go('entrenador', null, { reload: true });
                    }, function() {
                        $state.go('entrenador');
                    })
                }]
            })
            .state('entrenador.edit', {
                parent: 'entrenador',
                url: '/{id}/edit',
                data: {
                    authorities: ['ROLE_USER'],
                },
                onEnter: ['$stateParams', '$state', '$modal', function($stateParams, $state, $modal) {
                    $modal.open({
                        templateUrl: 'scripts/app/entities/entrenador/entrenador-dialog.html',
                        controller: 'EntrenadorDialogController',
                        size: 'lg',
                        resolve: {
                            entity: ['Entrenador', function(Entrenador) {
                                return Entrenador.get({id : $stateParams.id});
                            }]
                        }
                    }).result.then(function(result) {
                        $state.go('entrenador', null, { reload: true });
                    }, function() {
                        $state.go('^');
                    })
                }]
            })
            .state('entrenador.delete', {
                parent: 'entrenador',
                url: '/{id}/delete',
                data: {
                    authorities: ['ROLE_USER'],
                },
                onEnter: ['$stateParams', '$state', '$modal', function($stateParams, $state, $modal) {
                    $modal.open({
                        templateUrl: 'scripts/app/entities/entrenador/entrenador-delete-dialog.html',
                        controller: 'EntrenadorDeleteController',
                        size: 'md',
                        resolve: {
                            entity: ['Entrenador', function(Entrenador) {
                                return Entrenador.get({id : $stateParams.id});
                            }]
                        }
                    }).result.then(function(result) {
                        $state.go('entrenador', null, { reload: true });
                    }, function() {
                        $state.go('^');
                    })
                }]
            });
    });
