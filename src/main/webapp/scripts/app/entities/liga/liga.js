'use strict';

angular.module('ligaBaloncestoJHipsterApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('liga', {
                parent: 'entity',
                url: '/ligas',
                data: {
                    authorities: ['ROLE_USER'],
                    pageTitle: 'Ligas'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/liga/ligas.html',
                        controller: 'LigaController'
                    }
                },
                resolve: {
                }
            })
            .state('liga.detail', {
                parent: 'entity',
                url: '/liga/{id}',
                data: {
                    authorities: ['ROLE_USER'],
                    pageTitle: 'Liga'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/liga/liga-detail.html',
                        controller: 'LigaDetailController'
                    }
                },
                resolve: {
                    entity: ['$stateParams', 'Liga', function($stateParams, Liga) {
                        return Liga.get({id : $stateParams.id});
                    }]
                }
            })
            .state('liga.new', {
                parent: 'liga',
                url: '/new',
                data: {
                    authorities: ['ROLE_USER'],
                },
                onEnter: ['$stateParams', '$state', '$modal', function($stateParams, $state, $modal) {
                    $modal.open({
                        templateUrl: 'scripts/app/entities/liga/liga-dialog.html',
                        controller: 'LigaDialogController',
                        size: 'lg',
                        resolve: {
                            entity: function () {
                                return {
                                    nombre: null,
                                    id: null
                                };
                            }
                        }
                    }).result.then(function(result) {
                        $state.go('liga', null, { reload: true });
                    }, function() {
                        $state.go('liga');
                    })
                }]
            })
            .state('liga.edit', {
                parent: 'liga',
                url: '/{id}/edit',
                data: {
                    authorities: ['ROLE_USER'],
                },
                onEnter: ['$stateParams', '$state', '$modal', function($stateParams, $state, $modal) {
                    $modal.open({
                        templateUrl: 'scripts/app/entities/liga/liga-dialog.html',
                        controller: 'LigaDialogController',
                        size: 'lg',
                        resolve: {
                            entity: ['Liga', function(Liga) {
                                return Liga.get({id : $stateParams.id});
                            }]
                        }
                    }).result.then(function(result) {
                        $state.go('liga', null, { reload: true });
                    }, function() {
                        $state.go('^');
                    })
                }]
            })
            .state('liga.delete', {
                parent: 'liga',
                url: '/{id}/delete',
                data: {
                    authorities: ['ROLE_USER'],
                },
                onEnter: ['$stateParams', '$state', '$modal', function($stateParams, $state, $modal) {
                    $modal.open({
                        templateUrl: 'scripts/app/entities/liga/liga-delete-dialog.html',
                        controller: 'LigaDeleteController',
                        size: 'md',
                        resolve: {
                            entity: ['Liga', function(Liga) {
                                return Liga.get({id : $stateParams.id});
                            }]
                        }
                    }).result.then(function(result) {
                        $state.go('liga', null, { reload: true });
                    }, function() {
                        $state.go('^');
                    })
                }]
            });
    });
