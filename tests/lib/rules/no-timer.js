/**
 * @fileoverview Do not use timer for performance issues
 * @author Ankit
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-timer"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-timer", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "kony.timer.schedule(\"mytimer12\",this.timerFunc, 0, false);",
            errors: [{
                message: "Do not use timers as it creates performance issue",
                type: "MemberExpression"
            }]
        },
        {
            code: "kony.timer.cancel(\"screenHeightTimer\");",
            errors: [{
                message: "Do not use timers as it creates performance issue",
                type: "MemberExpression"
            }]
        },
        {
            code: "setTimeout(this.alignAccountTypesToAccountSelectionImg, 500);",
            errors: [{
                message: "Do not use timers as it creates performance issue",
                type: "CallExpression"
            }]
        }
        
    ]
});
