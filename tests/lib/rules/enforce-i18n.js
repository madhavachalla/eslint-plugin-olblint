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
        "this.view.oneTimeTransfer.tbxBankAddressLine2.text = \"\"",
        "tbxHello.text = \"Yo\"",
        "this.xyz = true",
        "this.view.lblZYZ.text = \"\"",
        "data[data.length - 1].imgMoveDown = \"disable_down_btn.png\"",
        `
            var x = {
                text: kony.i18n.getLocalizedString(\"dncj\")
            }
        `,
        `
        var MakeTransferData = {
            "btnAction": "btnAction",
            "flxAccountName": "flxAccountName",
            "flxAccountType": "flxAccountType",
            "flxBankName": "flxBankName",
            "flxDropdown": "flxDropdown",
            "flxMakeTransfersTransfersUnselected": "flxMakeTransfersTransfersUnselected",
            "flxRow": "flxRow",
            "imgDropdown": "imgDropdown",
            "lblAccountName": "lblAccountName",
            "lblAccountType": "lblAccountType",
            "lblBankName": "lblBankName",
            "lblSeparator": "lblSeparator",
            "flxWireTransferMakeTransfersSelected": "flxWireTransferMakeTransfersSelected",
            "lblIdentifier": "lblIdentifier",
            "flxIdentifier": "flxIdentifier",
            "lblAccountHolder": "lblAccountHolder",
            "lblAccountNumber": "lblAccountNumber",
            "lblRoutingNumber": "lblRoutingNumber",
            "lblAccountNumberValue": "lblAccountNumberValue",
            "lblAccountTypeValue": "lblAccountTypeValue",
            "lblAddedOnValue": "lblAddedOnValue",
            "lblSwiftCode": "lblSwiftCode",
            "lblIBANNo": "lblIBANNo",
            "lblBankDetailsTitle": "lblBankDetailsTitle",
            "lblRoutingNumberValue": "lblRoutingNumberValue",
            "lblIBANNumber": "lblIBANNumber",
            "lblBankAddressValue": "lblBankAddressValue",
            "lblRowSeperator": "lblRowSeperator"
        };
        `,
        `
        var xMap = {
            lblSFDFDHSV: 'XHHXHXD',
            tbxYDJD: 'fhjdsxujbfc' 
        }
        `,
        `var x  = {
            100: 'true'
        }`
    ],

    invalid: [
        {
            code: "this.view.AddRecipientAccount.lblIBANOrIRC.text = \"International Account Number (IBAN)\"",
            errors: [{
                message: "Avoid assigning literal to a text property. Use a i18n key instead",
                type: "AssignmentExpression"
            }]
        },
        {
            code: "this.view.oneTimeTransfer.lblBankAddressLine2.text = \"XYZ\"",
            errors: [{
                message: "Avoid assigning literal to a text property. Use a i18n key instead",
                type: "AssignmentExpression"
            }]
        },
        {
            code: "this.view.oneTimeTransfer.tbxBankAddressLine2.placeholder = \"XYZ\"",
            errors: [{
                message: "Avoid assigning literal to a text property. Use a i18n key instead",
                type: "AssignmentExpression"
            }]
        },
        {
            code: "this.view.oneTimeTransfer.btnBankAddressLine2.toolTip = \"XYZ\"",
            errors: [{
                message: "Avoid assigning literal to a text property. Use a i18n key instead",
                type: "AssignmentExpression"
            }]
        },
        {
            code: `
                var x = {
                    text: 'XHHXHXD'
                }
            `,
            errors: [{
                message: "Avoid assigning literal to a text property. Use a i18n key instead",
                type: "Property"
            }]
        },
        {
            code: `
                this.view.lblText.text = "Hi" + dsbjsdfbj.sbdj;
            `,
            errors: [{
                message: "Avoid assigning literal to a text property. Use a i18n key instead",
                type: "AssignmentExpression"
            }]
        },
        {
            code: `
                this.view.lblText.text = dsbjsdfbj.sbdj + "Hi";
            `,
            errors: [{
                message: "Avoid assigning literal to a text property. Use a i18n key instead",
                type: "AssignmentExpression"
            }]
        },
        {
            code: `
                    this.view.CopylblPendingTransactions0a979ad50321149.text = secondTable[0].lblTransactionHeader + " TRANSACTIONS";;
            `,
            errors: [{
                message: "Avoid assigning literal to a text property. Use a i18n key instead",
                type: "AssignmentExpression"
            }]
        },
        {
            code: `
                this.view.lblXyz.text = "Hi" + kxojco.xncjk + "Texf" + sdnjs.sdhs;
            `,
            errors: [{
                message: "Avoid assigning literal to a text property. Use a i18n key instead",
                type: "AssignmentExpression"
            }]
        },
        {
            code: `
                var x = {
                    lblSFDFDHSV: 'XHHXHXD',
                    tbxYDJD: {
                        text: 'hello',
                        placeholder: 'sjbdujs'
                    }  
                }
            `,
            errors: [{
                message: "Avoid assigning literal to a text property. Use a i18n key instead",
                type: "Property"
            },
            {
                message: "Avoid assigning literal to a text property. Use a i18n key instead",
                type: "Property"
            },
            {
                message: "Avoid assigning literal to a text property. Use a i18n key instead",
                type: "Property"
            }]
        }
    ]
});
