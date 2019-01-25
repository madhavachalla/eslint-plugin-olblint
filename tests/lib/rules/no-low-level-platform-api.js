/**
 * @fileoverview do not use low level platform API
 * @author Madhav
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-low-level-platform-api"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-low-level-platform-api", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "_kony.mvc.navigation",
            errors: [{
                message: "do not use low level platform API",
                type: "Identifier"
            }]
        }
    ]
});
