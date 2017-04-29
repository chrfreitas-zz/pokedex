((angular) => {

    'use strict';

    class CommentController {

        constructor(CommentModel){

            /**
            *   Services
            */
            this.CommentModel = CommentModel;

            /**
            *   Properties
            */
            this.user = '';
            this.text = '';

        }

        /**
        * Save the comment
        */
        send(name){

            var comment = new this.CommentModel({
                user: this.user,
                text: this.text                
            });

            comment.save(name);

        }

    }

    angular.module('app').controller('CommentController', CommentController);

})(window.angular);
