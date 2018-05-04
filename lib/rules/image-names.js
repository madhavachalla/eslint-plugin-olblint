/**
 * @fileoverview Image names should not be used in code
 * @author Shivam
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Image names should not be used in code",
            category: "Fill me in",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {

        const message = "Avoid hardcoding image names in code";

        function isInvalidValue (value) {
            return typeof value === "string" && value.includes(".png")
        }

        return {

            AssignmentExpression: function (node) {
                if (node.right.type === "Literal" && isInvalidValue(node.right.value)) {
                    context.report(node, message);
                }
            },
            ObjectExpression: function (node) {
                node.properties.forEach(property => {
                    if (property.value.type === "Literal" && isInvalidValue(property.value.value)) {
                        context.report(property, message);
                    }
                });
            },
            BinaryExpression: function (node) {
                if (node.right.type === "Literal" && (node.operator === "==" || node.operator === "===") && isInvalidValue(node.right.value)) {
                    context.report(node, message);
                }
            }

        };
    }
};
