'use strict';

angular.module('ligaBaloncestoJHipsterApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('partido', {
                parent: 'entity',
                url: '/partidos',
                data: {
                    authorities: ['ROLE_USER'],
                    pageTitle: 'Partidos'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/partido/partidos.html',
                        controller: 'PartidoController'
                    }
                },
                resolve: {
                }
            })
            .state('partido.detail', {
                parent: 'entity',
                url: '/partido/{id}',
                data: {
                    authorities: ['ROLE_USER'],
                    pageTitle: 'Partido'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/partido/partido-detail.html',
                        controller: 'PartidoDetailController'
                    }
                },
                resolve: {
                    entity: ['$stateParams', 'Partido', function($stateParams, Partido) {
                        return Partido.get({id : $stateParams.id});
                    }]
                }
            })
            .state('partido.new', {
                parent: 'partido',
                url: '/new',
                data: {
                    authorities: ['ROLE_USER'],
                },
                onEnter: ['$stateParams', '$state', '$modal', function($stateParams, $state, $modal) {
                    $modal.open({
                        templateUrl: 'scripts/app/entities/partido/partido-dialog.html',
                        controller: 'PartidoDialogController',
                        size: 'lg',
                        resolve: {
                            entity: function () {
                                return {
                                    fechaPartido: null,
                                    id: null
                                };
                            }
                        }
                    }).result.then(function(result) {
                        $state.go('partido', null, { reload: true });
                    }, function() {
                        $state.go('partido');
                    })
                }]
            })
            .state('partido.edit', {
                parent: 'partido',
                url: '/{id}/edit',
                data: {
                    authorities: ['ROLE_USER'],
                },
                onEnter: ['$stateParams', '$state', '$modal', function($stateParams, $state, $modal) {
                    $modal.open({
                        templateUrl: 'scripts/app/entities/partido/partido-dialog.html',
                        controller: 'PartidoDialogController',
                        size: 'lg',
                        resolve: {
                            entity: ['Partido', function(Partido) {
                                return Partido.get({id : $stateParams.id});
                            }]
                        }
                    }).result.then(function(result) {
                        $state.go('partido', null, { reload: true });
                    }, function() {
                        $state.go('^');
                    })
                }]
            })
            .state('partido.delete', {
                parent: 'partido',
                url: '/{id}/delete',
                data: {
                    authorities: ['ROLE_USER'],
                },
                onEnter: ['$stateParams', '$state', '$modal', function($stateParams, $state, $modal) {
                    $modal.open({
                        templateUrl: 'scripts/app/entities/partido/partido-delete-dialog.html',
                        controller: 'PartidoDeleteController',
                        size: 'md',
                        resolve: {
                            entity: ['Partido', function(Partido) {
                                return Partido.get({id : $stateParams.id});
                            }]
                        }
                    }).result.then(function(result) {
                        $state.go('partido', null, { reload: true });
                    }, function() {
                        $state.go('^');
                    })
                }]
            });
    });
