((angular) => {

    'use strict';

    class PokemonModel {

        constructor(CommentModel) {
            this.CommentModel = CommentModel;
        }

        setData(params = {}){
            this.name = params.name;

            this.comment = new this.CommentModel();
            this.comment.setData(this);
        }

        static create(CommentModel){
            return new PokemonModel(CommentModel);
        }


    }

    angular.module('app').factory('PokemonModel', PokemonModel.create);

})(window.angular);
