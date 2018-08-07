/**
 * @fileoverview Lageacy access to Configuration Keys
 * @author Shivam Marwaha 
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/old-configuration"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("old-configuration", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "CommonUtilities.getConfiguration(\"editDisputeATransaction\") === \"true\"",
            errors: [{
                message: "editDisputeATransaction should be accessed from configuraration manager",
                type: "CallExpression"
            }]
        },
        {
            code: `
                if (CommonUtilities.getConfiguration("editDisputeATransaction") === "true") {

                }
            `,
            errors: [{
                message: "editDisputeATransaction should be accessed from configuraration manager",
                type: "CallExpression"
            }]
        },
        {
            code: `kony.onlineBanking.configurations.getConfiguration("frontendDateFormat")`,
            errors: [{
                message: "frontendDateFormat should be accessed from configuraration manager",
                type: "CallExpression"
            }]
        }
    ]
});
