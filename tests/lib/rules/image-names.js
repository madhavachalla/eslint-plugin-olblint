/**
 * @fileoverview Image names should not be used in code
 * @author Shivam
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/image-names"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("image-names", rule, {

    valid: [
        "a = \"dkhfsjh\" ",
        `x = {
            dsad: "dfsfs.x"
        }`,
        `
            if(x === "sdgusgvfhsv.sdwsfd") {
                
            }

        `

    ],

    invalid: [
        {
            code: "x = \"sdgjgad.png\"",
            errors: [{
                message: "Avoid hardcoding image names in code",
                type: "AssignmentExpression"
            }]
        },
        {
            code: `x = {
                dsad: "dfsfs.x.png"
            }`,
            errors: [{
                message: "Avoid hardcoding image names in code",
                type: "Property"
            }]
        },
        {
            code:  `
                if(x === "sdgusgvfhsv.png") {
                    
                }
            `,
            errors: [{
                message: "Avoid hardcoding image names in code",
                type: "BinaryExpression"
            }]
        },
    ]
});
