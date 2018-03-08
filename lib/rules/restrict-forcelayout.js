/**
 * @fileoverview Throw a warning on every force layout usage
 * @author Shivam
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Throw a warning on every force layout usage",
            category: "Restrictions",
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
            MemberExpression: function (node) {
                if (node.object.type === "MemberExpression" && node.object.property.type === "Identifier" && node.object.property.name === "view" && node.property.name === "forceLayout") {
                    context.report(node, "Forcelayout usage may not be required");
                }
            }

        };
    }
};
