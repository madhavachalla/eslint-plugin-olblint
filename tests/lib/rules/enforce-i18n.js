/**
 * @fileoverview It will warn when text property is assigned a string literal
 * @author Shivam
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/enforce-i18n"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("enforce-i18n", rule, {

    valid: [
        {
            code: "this.view.oneTimeTransfer.tbxBankAddressLine2.text = kony.i18n.getLocalizedString(\"i18nkey\")",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ],

    invalid: [
        {
            code: "this.view.oneTimeTransfer.tbxBankAddressLine2.text = \"Addr Line 2\";",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
