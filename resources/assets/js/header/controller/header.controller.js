((angular) => {
    'use strict';

    class HeaderController {

        getResults() {
            return 'ResultsFinder';
        }
    }

    angular.module('app', []).controller('HeaderController', HeaderController);

})(angular);
