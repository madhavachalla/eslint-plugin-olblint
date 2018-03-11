/**
 * @fileoverview Require should not be used. Only Define should be used
 * @author Shivam
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-require-usage"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-require-usage", rule, {

    valid: [
        "requirxe('');",
    ],

    invalid: [
        {
            code: "require('');",
            errors: [{
                message: "Require should not be used",
                type: "CallExpression"
            }]
        }
    ]
});
