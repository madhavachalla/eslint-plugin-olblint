/**
 * @fileoverview Fonticons constants should not be hardcoded
 * @author Shivam
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/hardcoded-fonticons-values"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("hardcoded-fonticons-values", rule, {

    valid: [
        "a.text = \"OLBConstants.ChecboxTrue\""

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "a.text = \"C\"",
            errors: [{
                message: "Fonticons constants should not be hardcoded",
                type: "AssignmentExpression"
            }]
        },
        {
            code: `
                if (sfds.text === 'C') {
                    console.log("checked")
                }
            `,
            errors: [{
                message: "Fonticons constants should not be hardcoded",
                type: "BinaryExpression"
            }]
        },
        {
            code: `
                data.lblCheckBox = data.lblCheckBox === true ? "D" : "C";
            `,
            errors: [{
                message: "Fonticons constants should not be hardcoded",
                type: "ConditionalExpression"
            }]
        },
        {
            code: `
            var a  = {
                "text": "C",
              "textS": OLBCo.c 
            }
            `,
            errors: [{
                message: "Fonticons constants should not be hardcoded",
                type: "Property"
            }]
        }
    ]
});
