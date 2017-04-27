((angular) => {
    'use strict';

    class HeaderController {

        getResults() {
            return 'ResultsFinder';
        }

        getNothing() {
            return '';
        }
    }

    angular.module('app', []).controller('HeaderController', HeaderController);

})(angular);
