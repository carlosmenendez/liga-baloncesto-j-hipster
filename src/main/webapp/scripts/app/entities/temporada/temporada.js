'use strict';

angular.module('ligaBaloncestoJHipsterApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('temporada', {
                parent: 'entity',
                url: '/temporadas',
                data: {
                    authorities: ['ROLE_USER'],
                    pageTitle: 'Temporadas'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/temporada/temporadas.html',
                        controller: 'TemporadaController'
                    }
                },
                resolve: {
                }
            })
            .state('temporada.detail', {
                parent: 'entity',
                url: '/temporada/{id}',
                data: {
                    authorities: ['ROLE_USER'],
                    pageTitle: 'Temporada'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/temporada/temporada-detail.html',
                        controller: 'TemporadaDetailController'
                    }
                },
                resolve: {
                    entity: ['$stateParams', 'Temporada', function($stateParams, Temporada) {
                        return Temporada.get({id : $stateParams.id});
                    }]
                }
            })
            .state('temporada.new', {
                parent: 'temporada',
                url: '/new',
                data: {
                    authorities: ['ROLE_USER'],
                },
                onEnter: ['$stateParams', '$state', '$modal', function($stateParams, $state, $modal) {
                    $modal.open({
                        templateUrl: 'scripts/app/entities/temporada/temporada-dialog.html',
                        controller: 'TemporadaDialogController',
                        size: 'lg',
                        resolve: {
                            entity: function () {
                                return {
                                    nombre: null,
                                    tumadre: null,
                                    id: null
                                };
                            }
                        }
                    }).result.then(function(result) {
                        $state.go('temporada', null, { reload: true });
                    }, function() {
                        $state.go('temporada');
                    })
                }]
            })
            .state('temporada.edit', {
                parent: 'temporada',
                url: '/{id}/edit',
                data: {
                    authorities: ['ROLE_USER'],
                },
                onEnter: ['$stateParams', '$state', '$modal', function($stateParams, $state, $modal) {
                    $modal.open({
                        templateUrl: 'scripts/app/entities/temporada/temporada-dialog.html',
                        controller: 'TemporadaDialogController',
                        size: 'lg',
                        resolve: {
                            entity: ['Temporada', function(Temporada) {
                                return Temporada.get({id : $stateParams.id});
                            }]
                        }
                    }).result.then(function(result) {
                        $state.go('temporada', null, { reload: true });
                    }, function() {
                        $state.go('^');
                    })
                }]
            })
            .state('temporada.delete', {
                parent: 'temporada',
                url: '/{id}/delete',
                data: {
                    authorities: ['ROLE_USER'],
                },
                onEnter: ['$stateParams', '$state', '$modal', function($stateParams, $state, $modal) {
                    $modal.open({
                        templateUrl: 'scripts/app/entities/temporada/temporada-delete-dialog.html',
                        controller: 'TemporadaDeleteController',
                        size: 'md',
                        resolve: {
                            entity: ['Temporada', function(Temporada) {
                                return Temporada.get({id : $stateParams.id});
                            }]
                        }
                    }).result.then(function(result) {
                        $state.go('temporada', null, { reload: true });
                    }, function() {
                        $state.go('^');
                    })
                }]
            });
    });
