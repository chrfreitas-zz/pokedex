((angular) => {
    'use strict';

    class HeaderService {

        getResults() {
            return 'ResultsFinder';
        }
    }

    angular.module('app').service('$header', HeaderService);
    
})(angular);
