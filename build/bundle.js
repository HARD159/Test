(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// тут мы получаем функцию без именни из модуля testModule
// и поэтому нужно присвоить ей какое-то имя

// var funcName = require('./lib/testModule');
var moD = require('./lib/testModule');
moD.sayHelloasdas()

// window.funcName = require('./lib/testModule');

},{"./lib/testModule":2}],2:[function(require,module,exports){
var one =1;
var gameMap = [1,2,3, 2, 32,'asdasd'];

function sayHello(){
    alert(gameMap)
}


module.exports = {sayHelloasdas: sayHello, gameMap123: gameMap}


},{}]},{},[1]);
