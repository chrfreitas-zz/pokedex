((angular) => {

    'use strict';

    class PokemonModel {

        constructor() {
            this.id = 0;
            this.name = '';
            this.image = '';
            this.abilities = [];
            this.experience = 0;
            this.weight = 0;
            this.height = 0;
        }

        setData(params = {}){            
            this.id = params.id;
            this.name = params.name;
             /*jshint camelcase: false */
            this.image = params.sprites.front_default;
            this.abilities = params.abilities;
             /*jshint camelcase: false */
            this.experience = params.base_experience;
            this.weight = params.weight;
            this.height = params.height;
        }

        static create(){
            return new PokemonModel();
        }

    }

    angular.module('app').factory('PokemonModel', PokemonModel.create);

})(window.angular);
