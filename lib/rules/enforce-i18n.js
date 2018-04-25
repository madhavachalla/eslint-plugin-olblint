/**
 * @fileoverview It will warn when text property is assigned a string literal
 * @author Shivam
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "It will warn when text property is assigned a string literal",
            category: "Fill me in",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {

        

        var widgetPrefixPropertyMap = {
            lbl: ["text"],
            btn: ["toolTip", "text"],
            rtx: ["text"],
            tbx: ["placeholder"]
        }

        function checkForValidWidget (node, propertyName) {
            var widgetName = "";
            if (node.type === "MemberExpression") {
                widgetName = node.property.name;
            }
            else if (node.type === "Identifier") {
                widgetName = node.name;
            }
            if (widgetName === "" || widgetName === undefined) {
                return true;
            }
            var prefix = widgetName.substr(0, 3);
            if (Object.keys(widgetPrefixPropertyMap).indexOf(prefix) > -1 && widgetPrefixPropertyMap[prefix].indexOf(propertyName) > -1) {
                return true;
            }
            return false;
            
        }


        return {
            AssignmentExpression: function (node) {
                if (node.left.type === "MemberExpression" && node.right.type === "Literal" && typeof node.right.value === "string") {
                    if (checkForValidWidget(node.left.object, node.left.property.name)) {
                        context.report(node,"Avoid assigning literal to a text property. Use a i18n key instead");
                    }
                }
            }
        };
    }
};
