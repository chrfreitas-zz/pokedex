# Pokedex 2.0

Pokedex is a project which is possible to read and make comments about all the classic pokemons (even the best one a.k.a `charizard`) and much more.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installing

Follow all the next instructions to run the project in your environment.

To install all dependencies run the script below:
> npm install


After all dependencies installed than you can run:
> npm start

Go to http://localhost:8080/ to see the application running.

## Usage

Below you can see all tasks that It'll be necessary to play with this project.

### Javascript Tasks

Compiles all js files:
> gulp js:bundle

Run automatically js:bundle to every file change:
> gulp js:watch

Run unit test in whole application you can run:
> gulp js:test

### Less Tasks

Compiles all less files
> gulp less:bundle

Run automatically less:bundle to every file change:
> gulp less:watch

### Both Tasks

Compiles all files (js and less)
> gulp all:bundle

Run automatically all files compile to every file change:
> gulp all:watch

### Library Tasks

Compiles libraries and frameworks like angular.js just run
> gulp vendor:bundle

## Built With

* [Angular 1.x](https://angularjs.org/) - The front-end framework
* [Less](http://lesscss.org/) - CSS pre-processor
* [ES6](http://es6-features.org/) - Next generation JavaScript
* [ITCSS](https://willianjusten.com.br/organizando-seu-css-com-itcss/) - Methodologies to organize the css's folder.
* [BEM](http://getbem.com/introduction/) - Methodologies to organize the style.
* [Jasmine](https://jasmine.github.io/) - Framework Unit Test
* [Karma](https://karma-runner.github.io/1.0/index.html) - Test Runner for Javascript

## Authors

[Christian Freitas](http://chrfreitas.com)

## License

This project is licensed under the MIT License.
