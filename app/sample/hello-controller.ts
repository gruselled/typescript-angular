/// <reference path="../_all.ts" />

module TypeScriptApp {

    class HelloController {
        private message:string;

        constructor() {
            this.message = "Hello World !";
        }

        public sayHello() {
            return this.message;
        }
    }

    angular.module('typeScriptApp').controller('HelloController', HelloController)
}