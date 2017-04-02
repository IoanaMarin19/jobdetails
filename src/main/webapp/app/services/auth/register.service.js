(function () {
    'use strict';

    angular
        .module('jobsDetailsApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
