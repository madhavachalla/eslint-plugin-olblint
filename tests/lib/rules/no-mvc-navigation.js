/**
 * @fileoverview Do not use mvc navigation method
 * @author Ankit
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-mvc-navigation"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-mvc-navigation", rule, {
    
    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "var ntf = new kony.mvc.Navigation('frmAccountsDetails');",
            errors: [{
                message: "Avoid using kony MVC Navigation Methods",
                type: "MemberExpression"
            }]
        },
        {
            code: "var ntf = new konyNameSpece.Navigation('frmAccountsDetails');",
            errors: [{
                message: "Avoid using kony MVC Navigation Methods",
                type: "MemberExpression"
            }]
        },
        {
            code: `
            function x(CommonUtilites) {
                return {
                    onNavigate:0,
                }
              }
            `,
            errors: [{
                message: "Do not use onNavigate method as it is reserved keyword for MDA2.0",
                type: "Identifier"
            }]
        },
        {
            code: `
            onNavigate("SendRequest");
            `,
            errors: [{
                message: "Do not use onNavigate method as it is reserved keyword for MDA2.0",
                type: "Identifier"
            }]
        }
    ]
});
