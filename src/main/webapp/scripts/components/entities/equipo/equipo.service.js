'use strict';

angular.module('ligaBaloncestoJHipsterApp')
    .factory('Equipo', function ($resource, DateUtils) {
        return $resource('api/equipos/:id', {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    data.fechaFundacion = DateUtils.convertLocaleDateFromServer(data.fechaFundacion);
                    return data;
                }
            },
            'update': {
                method: 'PUT',
                transformRequest: function (data) {
                    data.fechaFundacion = DateUtils.convertLocaleDateToServer(data.fechaFundacion);
                    return angular.toJson(data);
                }
            },
            'save': {
                method: 'POST',
                transformRequest: function (data) {
                    data.fechaFundacion = DateUtils.convertLocaleDateToServer(data.fechaFundacion);
                    return angular.toJson(data);
                }
            }
        });
    });
