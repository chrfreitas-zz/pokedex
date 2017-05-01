((angular) => {

    'use strict';

    var scope = {};

    class CommentController {

        constructor($routeParams, CommentModel){

            scope = this;

            /**
            * Services
            */
            scope.$routeParams = $routeParams;
            scope.CommentModel = CommentModel;

            /**
            * Properties
            */
            scope.comment = {
                new: '',
                all: []
            };
        }

        /**
        * Initialize CommentController
        */
         init(){

            scope.comment = scope.CommentModel;
            scope.comment.setData(scope.$routeParams.id);

            scope.comment.get().then(function(response) {
                scope.comment.all = response || [];
            });

            return true;
        }

        send(){

            scope.comment.all.push({
                user: scope.comment.new.user,
                text: scope.comment.new.text
            });

            scope.comment.all = JSON.parse(angular.toJson(scope.comment.all));

            scope.comment.save(scope.comment.all);

            scope.clearForm();
        }

        clearForm(){
            scope.comment.new = {};
        }

    }

    angular.module('app').controller('CommentController', CommentController);

})(window.angular);
