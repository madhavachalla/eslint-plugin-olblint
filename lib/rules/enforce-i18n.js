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

        var validWidgetsPrefixes = ["lbl", "btn", "rtx"];

        function checkForValidWidget (node) {
            var widgetName = "";
            if (node.type === "MemberExpression") {
                widgetName = node.property.name;
            }
            else if (node.type === "Identifier") {
                widgetName = node.name;
            }
            var prefix = widgetName.substr(0, 3);
            if (validWidgetsPrefixes.indexOf(prefix) > -1) {
                return true;
            }
            return false;
            
        }


        return {
            AssignmentExpression: function (node) {
                if (node.left.type === "MemberExpression" && node.left.property.name === "text" && node.right.type === "Literal") {
                    if (checkForValidWidget(node.left.object)) {
                        context.report(node,"Avoid assigning literal to a text property. Use a i18n key instead");
                    }
                }
            }
        };
    }
};
