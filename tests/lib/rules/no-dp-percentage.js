/**
 * @fileoverview should not use hardcoded dp and percentage
 * @author Dhananjai
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-dp-percentage"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-dp-percentage", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "currForm.accountListMenu.top = currTop + \"dp\";",
            errors: [{
                message: "Please use constants for dp, % and px.",
                type: "AssignmentExpression"
            }]
        },
        {
            code: `currForm.accountListMenu.top = "2dp";`,
            errors: [{
                message: "Please use constants for dp, % and px.",
                type: "AssignmentExpression"
            }]
        },
        {
            code: `var height = "2dp";`,
            errors: [{
                message: "Please use constants for dp, % and px.",
                type: "VariableDeclarator"
            }]
        },
        {
            code: `var height = 1 + "dp";`,
            errors: [{
                message: "Please use constants for dp, % and px.",
                type: "VariableDeclarator"
            }]
        },
        {
            code: `define(['commonUtilities','OLBConstants'],function(commonUtilities,OLBConstants){
                return {
                initialLoadingDone: false,
                transfersViewModel: {
                  transactionsData: [],
                  first:0,
                  last:10
                },
                
                getPageHeight: function () {
                  var height =  this.view.flxHeader.frame.height + this.view.flxMain.frame.height + this.view.flxFooter.frame.height + 40;
                  return height + "dp";
                }
              }
              });`,
            errors: [{
                message: "Please use constants for dp, % and px.",
                type: "ReturnStatement"
            }]
        },
        {
            code: `var donutChart = new kony.ui.CustomWidget({
                "id": "donutChart",
                "isVisible": true,
                "left": "dp",
                "top": "0dp",
                "width": "800dp",
                "height": "390dp",
                "zIndex": 1000000
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "widgetName": "DonutChart",
                "chartData": data,
                "chartProperties": options
            });`,
            errors: [{
                message: "Please use constants for dp, % and px.",
                type: "Property"
            },{
                message: "Please use constants for dp, % and px.",
                type: "Property"
            },{
                message: "Please use constants for dp, % and px.",
                type: "Property"
            },{
                message: "Please use constants for dp, % and px.",
                type: "Property"
            }]
        },
        {
            code: `var donutChart = new kony.ui.CustomWidget({
                "id": "donutChart",
                "isVisible": true,
                "left": 1 + "dp",
                "top": "0dp",
                "width": "800dp",
                "height": "390dp",
                "zIndex": 1000000
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "widgetName": "DonutChart",
                "chartData": data,
                "chartProperties": options
            });`,
            errors: [{
                message: "Please use constants for dp, % and px.",
                type: "Property"
            },{
                message: "Please use constants for dp, % and px.",
                type: "Property"
            },{
                message: "Please use constants for dp, % and px.",
                type: "Property"
            },{
                message: "Please use constants for dp, % and px.",
                type: "Property"
            }]
        }
    ]
});
