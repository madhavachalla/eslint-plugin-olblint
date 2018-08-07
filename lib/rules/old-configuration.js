/**
 * @fileoverview Lageacy access to Configuration Keys
 * @author Shivam Marwaha 
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Lagacy access to Configuration Keys",
            category: "Olb",
            recommended: false
        },
        fixable: "code",  // or "code" or "whitespace"
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
            CallExpression (node) {
                if (node.callee.type === "MemberExpression" && node.callee.property.type === "Identifier" && node.callee.property.name === "getConfiguration") {
                    context.report({
                        node: node,
                        message: node.arguments[0].value + " should be accessed from configuraration manager",
                        fix: function(fixer) {
                            return fixer.replaceText(node, 
                                `applicationManager.getConfigurationManager().${node.arguments[0].value}`
                            );
                        }
                    });
                }
            },

        };
    }
};
