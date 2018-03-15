/**
 * @fileoverview Custom JSDoc Validation
 * @author Shivam
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/require-jsdoc"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("require-jsdoc", rule, {

    valid: [
        "/*@param @param @return*/Transfer_PresentationController.prototype.repeatTransfer = function (transactionObject,onBackPressed) {var self = this;}",
        "/*@return*/function x () {}",
       '/*@return*/function doSomething() {return 1+2;}',
        '/*@param @return*/function doSomething(string) {return string;}',
        '/*@param @return*/var test = function(string){console.log("test");}',
        'var comp = React.createClass({/*@return*/render: function(){}});',
        'module.exports = function(){return true};'
    ],

    invalid: [
        {
            code: 'var outerFunction = function(){/*@return*/function innerFunction(){}}',
            errors: [ { message: 'Missing @jsdoc for outerFunction' }]
        },
        {
            code: 'function doSomething() {return 1+2;}',
            errors: [ { message: 'Missing @jsdoc for doSomething' } ]
        },
        {
            code: 'function doSomething(string) {return string}',
            errors: [ { message: 'Missing @jsdoc for doSomething' } ]
        },
        {
            code: '/*@return*/function doSomething(string) {return string}',
            errors: [ { message: 'Missing @param description in the jsdoc for doSomething' } ]
        },
        {
            code: '/*@param*/function doSomething(string) {return string}',
            errors: [ { message: 'Missing @return description in the jsdoc for doSomething' } ]
        },
        {
            code: 'var test = function(){console.log("test");}',
            errors: [ { message: 'Missing @jsdoc for test' } ]
        },
        {
            code: 'var test = function(string){console.log("test");}',
            errors: [ { message: 'Missing @jsdoc for test' } ]
        },
        {
            code: '/*@return*/var test = function(string){console.log(string);}',
            errors: [ { message: 'Missing @param description in the jsdoc for test' } ]
        },
        {
            code: '/*@param*/var test = function(string){console.log(string);}',
            errors: [ { message: 'Missing @return description in the jsdoc for test' } ]
        },
        {
            code: '/*@param*/var test = function(string,string2){console.log(string);}',
            errors: [ {message: 'Missing @return description in the jsdoc for test'}, { message: 'Missing @param description in the jsdoc for test' } ]
        },
        {
            code: '/*@param@return*/var test = function(var1, var2){console.log(string);}',
            errors: [ { message: 'Missing @param description in the jsdoc for test' } ]
        },
        {
            code: 'var comp = React.createClass({render: function(){}});',
            errors: [ { message: 'Missing @jsdoc for render' } ]
        }
    ]
});
