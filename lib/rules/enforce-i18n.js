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

        // variables should be defined here

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            AssignmentExpression: function (node) {
                if (node.left.type === "MemberExpression" && node.left.property.name === "text" && node.right.type === "Literal") {
                    context.report(node,"Avoid assigning literal to a text property. Use a i18n key instead");
                }
            }
        };
    }
};
