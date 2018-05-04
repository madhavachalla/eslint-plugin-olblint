/**
 * @fileoverview Fonticons constants should not be hardcoded
 * @author Shivam
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Fonticons constants should not be hardcoded",
            category: "Fill me in",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

 

    create: function(context) {

        const message = "Fonticons constants should not be hardcoded";

        function isUpperCase (value) {
            return value === value.toUpperCase () && value !== value.toLowerCase();
        }

        function isInvalidValue (value) {
            return typeof value === "string" &&
            value.length === 1 &&
            isUpperCase(value)
        }

        return {
            AssignmentExpression (node) {
                if (
                    node.right.type === "Literal" && 
                    isInvalidValue(node.right.value)
                ) {
                    context.report(node, message)
                }
            },
            BinaryExpression (node) {
                if ((node.operator === "=="  || node.operator === "===") &&
                    node.right.type === "Literal" && 
                    isInvalidValue(node.right.value)
                ) {
                    context.report(node, message)
                }
            },
            ConditionalExpression (node) {
                if ( (node.consequent.type === "Literal" && isInvalidValue(node.consequent.value)) ||
                    (node.alternate.type === "Literal" && isInvalidValue(node.alternate.value))
                ) {
                    context.report(node, message)
                }
            },
            ObjectExpression (node) {
               node.properties.forEach(property => {
                   if (property.value.type === "Literal" && isInvalidValue(property.value.value)) {
                       context.report(property, message);
                   }
               });
            }

        };
    }
};
