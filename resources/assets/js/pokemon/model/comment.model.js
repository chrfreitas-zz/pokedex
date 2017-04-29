((angular, firebase) => {

    'use strict';

    class CommentModel {

        constructor(params) {
            this.user = params.user;
            this.text = params.text;
        }

        save(name){
            var d = firebase.database().ref(name);

            d.set({
                user: this.user,
                text: this.text
            });

            d.on('value', function(snap) {
                console.log(snap);
            });

        }

        static instance(){
            return CommentModel;
        }

    }

    angular.module('app').factory('CommentModel', CommentModel.instance);

})(window.angular, window.firebase);
