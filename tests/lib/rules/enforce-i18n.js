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
            "this.view.oneTimeTransfer.tbxBankAddressLine2.text = kony.i18n.getLocalizedString(\"i18nkey\")",
    ],

    invalid: [
        {
            code: "this.view.AddRecipientAccount.lblIBANOrIRC.text = \"International Account Number (IBAN)\"",
            errors: [{
                message: "Avoid assigning literal to a text property. Use a i18n key instead",
                type: "AssignmentExpression"
            }]
        }
    ]
});
