((angular) => {

    'use strict';

    class PokemonModel {

        constructor() {
            this.name = '';
            this.image = '';
            this.abilities = [];
            this.experience = 0;
        }

        setData(params = {}){
            this.name = params.name;
             /*jshint camelcase: false */
            this.image = params.sprites.front_default;
            this.abilities = params.abilities;
             /*jshint camelcase: false */
            this.experience = params.base_experience;            
        }

        static create(){
            return new PokemonModel();
        }

    }

    angular.module('app').factory('PokemonModel', PokemonModel.create);

})(window.angular);
