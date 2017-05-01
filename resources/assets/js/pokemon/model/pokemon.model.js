((angular) => {

    'use strict';

    class PokemonModel {

        constructor() {
            this.name = '';
        }

        setData(params = {}){
            this.name = params.name;
        }

        static create(){
            return new PokemonModel();
        }

    }

    angular.module('app').factory('PokemonModel', PokemonModel.create);

})(window.angular);
