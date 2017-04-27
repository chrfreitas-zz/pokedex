'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (angular) {
    'use strict';

    var HeaderController = function () {
        function HeaderController() {
            _classCallCheck(this, HeaderController);
        }

        _createClass(HeaderController, [{
            key: 'getResults',
            value: function getResults() {
                return 'ResultsFinder';
            }
        }, {
            key: 'getNothing',
            value: function getNothing() {
                return '';
            }
        }]);

        return HeaderController;
    }();

    angular.module('app', []).controller('HeaderController', HeaderController);
})(angular);