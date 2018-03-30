/**
 * @fileoverview No logging statements should be there. As in release mode 
 * @author Shivam
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/logging-statements"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("logging-statements", rule, {

    valid: [
        "kony.x();",
        "console.foo()",
        "kony.i18n.getLocalizedString()"
    ],

    invalid: [
        {
            code: "console.log()",
            errors: [{
                message: "Avoid using logging statements",
                type: "MemberExpression"
            }]
        },
        {
            code: "console.log",
            errors: [{
                message: "Avoid using logging statements",
                type: "MemberExpression"
            }]
        },
        {
            code: "kony.print()",
            errors: [{
                message: "Avoid using logging statements",
                type: "MemberExpression"
            }]
        },
        {
            code: "kony.print",
            errors: [{
                message: "Avoid using logging statements",
                type: "MemberExpression"
            }]
        }
    ]
});
