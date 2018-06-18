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
        `
        /**
         * Description
         */
        PC.prototype.sample = function () {

        }
        `,
        `
        PC.protoxtype.sample = function () {

        }
        `
    ],

    invalid: [
      {
          code:  
          `
          PC.prototype.sample = function () {
  
          }
          `,
          errors: [
              {
                  type: "FunctionExpression",
                  message: 'Missing JSDoc comment.'
              }
          ]
      },
      {
        code:  
        `
        /**
         * Description
         */
        
        PC.prototype.sample = function () {

        }
        `,
        errors: [
            {
                type: "FunctionExpression",
                message: 'Missing JSDoc comment.'
            }
        ]
    }
    ]
});
