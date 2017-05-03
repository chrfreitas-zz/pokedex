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

            scope.showForm = false;
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

        /**
        * Add new comment in the list and save de list
        */
        send(){

            scope.comment.all.push({
                user: scope.comment.new.user,
                text: scope.comment.new.text
            });

            scope.comment.all = JSON.parse(angular.toJson(scope.comment.all));

            scope.comment.save(scope.comment.all);

            scope.clearForm();
        }

        /**
        * Just clear the form for new comment.
        */
        clearForm(){
            scope.comment.new = {};
        }

        toogleForm(){
            scope.showForm = !scope.showForm;
        }

    }

    angular.module('app').controller('CommentController', CommentController);

})(window.angular);
