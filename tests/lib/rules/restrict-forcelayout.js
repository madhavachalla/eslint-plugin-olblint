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
             "this.view.forceLayoutx();"
    ],

    invalid: [
        {
            code: "this.view.forceLayout();",
            errors: [{
                message: "Forcelayout usage may not be required",
                type: "MemberExpression"
            }]
        }
    ]
});
