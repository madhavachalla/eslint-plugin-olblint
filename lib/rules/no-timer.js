/**
 * @fileoverview Do not use timer for performance issues
 * @author Ankit
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Do not use timer for performance issues",
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
        const msg= "Do not use timers as it creates performance issue";

        return {
            MemberExpression (node){
                try{
                    if((node.property.name==="schedule" || node.property.name==="cancel") && node.property.type==="Identifier"){
                        if(node.object.type==="MemberExpression"){
                            if(node.object.object.type==="Identifier" && typeof node.object.object.name==="string" && node.object.property.type==="Identifier" && node.object.property.name==="timer"){
                                context.report(node, msg)
                            }
                        }
                    }
                }catch(err){
                    console.log(err)
                }
            },
            CallExpression (node) {
                if (node.callee.type === "Identifier" && node.callee.name === "setTimeout") {
                             context.report(node, msg);
                         }
             }
        };
    }
};
