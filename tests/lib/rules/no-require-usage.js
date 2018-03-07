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
        {
            code: "requirxe('');",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    
    ],

    invalid: [
        {
            code: "require('');",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
