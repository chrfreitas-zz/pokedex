((angular, firebase) => {

    'use strict';

    class CommentModel {

        constructor($q) {

            /**
            * Services
            */
            this.$q = $q;


            /**
            * Properties
            */
            this.pokemon = '';

        }

        setData(params){
            this.pokemon = params.name;
        }

        save(user, text, old){
            let db = firebase.database().ref(this.pokemon);

            old.push({
                user,
                text
            });

            db.set(old);
        }

        get() {

            let db = firebase.database().ref(this.pokemon),
                defer = this.$q.defer();

            db.once('value').then((response) => {
                defer.resolve(response.val());
            }).catch((err) => {
                defer.reject(err);
            });

            return defer.promise;
        }

        static create($q){
            return new CommentModel($q);
        }

    }

    angular.module('app').factory('CommentModel', CommentModel.create);

})(window.angular, window.firebase);
