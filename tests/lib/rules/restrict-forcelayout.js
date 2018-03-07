/**
 * @fileoverview Throw a warning on every force layout usage
 * @author Shivam
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/restrict-forcelayout"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("restrict-forcelayout", rule, {

    valid: [

        {
            code: "this.view.forceLayoutx();",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ],

    invalid: [
        {
            code: "this.view.forceLayout();",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
