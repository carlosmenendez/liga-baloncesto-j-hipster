 'use strict';

angular.module('ligaBaloncestoJHipsterApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-ligaBaloncestoJHipsterApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-ligaBaloncestoJHipsterApp-params')});
                }
                return response;
            }
        };
    });
