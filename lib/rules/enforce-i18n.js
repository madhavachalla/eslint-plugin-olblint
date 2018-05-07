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

        const message = "Avoid assigning literal to a text property. Use a i18n key instead";

        var widgetPrefixPropertyMap = {
            lbl: ["text"],
            btn: ["toolTip", "text"],
            rtx: ["text"],
            tbx: ["placeholder"]
        }

        function isValidWidgetName (widgetName) {
            var prefix = widgetName.substr(0, 3);
            return Object.keys(widgetPrefixPropertyMap).indexOf(prefix) > -1;
        }

        function isValidPropertyName (widgetName, propertyName) {
            var prefix = widgetName.substr(0, 3);            
            return  widgetPrefixPropertyMap[prefix].indexOf(propertyName) > -1;
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
                return false;
            }
            if (isValidWidgetName(widgetName) && isValidPropertyName(widgetName, propertyName)) {
                return true;
            }
            return false;
            
        }

        function isInvalidValue (node) {
            if (node.type === "Literal") {
                return isInvalidLiteralValue(node.value);
            }
            else if (node.type === "BinaryExpression") {
                return isInvalidBinaryExpression(node);
            }
        }

        function isInvalidBinaryExpression (node) {
            if (node.right.type === "Literal" && isInvalidLiteralValue (node.right.value)) {
                return true;
            }
            if (node.left.type === "Literal" && isInvalidLiteralValue(node.left.value)) {
                return true;
            }
            if (node.left.type === "BinaryExpression") {
                return isInvalidBinaryExpression(node.left);
            }
        }

        function isInvalidLiteralValue (value) {
            return typeof value === "string" && value.length > 0;
        }

       


        return {
            AssignmentExpression: function (node) {
                if (node.left.type === "MemberExpression" && (node.right.type === "Literal" || node.right.type === "BinaryExpression")) {
                    if (checkForValidWidget(node.left.object, node.left.property.name) && isInvalidValue(node.right)) {
                        context.report(node,message);
                    }
                }
            },
            ObjectExpression: function (node) {
                const properties = ["text", "placeholder", "toolTip"]
                node.properties.forEach(property => {
                    if ((isValidWidgetName(property.key.name) || properties.indexOf(property.key.name)) > -1 && property.value.type === "Literal" && isInvalidLiteralValue(property.value.value)) {
                        context.report(property, message);
                    }
                });
            }
        };
    }
};
