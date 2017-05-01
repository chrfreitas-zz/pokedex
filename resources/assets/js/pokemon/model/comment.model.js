((angular, firebase) => {

    'use strict';

    class CommentModel {

        constructor() {
            this.get();
        }

        setData(params){
            this.pokemonName = params.name;
        }

        save(user, text){

            let db = firebase.database().ref(this.pokemonName);

            this.all.push({
                user,
                text
            });

            db.set(this.all);
        }

        get() {
            let db = firebase.database().ref(this.pokemonName);

            db.once('value').then((response) => {

                this.all = [];

                if(response.val()){
                    this.all = response.val()[this.pokemonName];
                }

            });
        }


        static instance(){
            return CommentModel;
        }

    }

    angular.module('app').factory('CommentModel', CommentModel.instance);

})(window.angular, window.firebase);
