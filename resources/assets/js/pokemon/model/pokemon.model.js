((angular) => {

    'use strict';

    class PokemonModel {

        constructor(params) {
            this.name = params.name;
        }

        static instance(){
            return PokemonModel;
        }

    }

    angular.module('app').factory('PokemonModel', PokemonModel.instance);

})(window.angular);
