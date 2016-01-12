'use strict';

angular.module('ligaBaloncestoJHipsterApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


