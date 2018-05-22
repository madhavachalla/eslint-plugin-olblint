/**
 * @fileoverview Do not use mvc navigation method
 * @author Ankit
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Do not use mvc navigation method",
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
        const msg= "Avoid using kony MVC Navigation Methods";
        const onNavigatemsg= "Do not use onNavigate method as it is reserved keyword for MDA2.0";
        return {
            MemberExpression(node) {
                if(node.property.type==="Identifier" && node.property.name==="Navigation"){
                    try{
                        if(node.object.type==="MemberExpression"){
                            if(node.object.object.type==="Identifier" && typeof node.object.property.name==="string" && node.object.property.type==="Identifier" && typeof node.object.object.name==="string"){
                                context.report(node, msg)
                            }
                        }
                        else if(node.property.type==="Identifier"){
                            context.report(node, msg)
                        }
                        
                    }catch(err){
                        console.log(err)
                    }
                }
            },
            Identifier(node){
                if(node.type==="Identifier" && (node.name==="onNavigate" || node.name==="onnavigate")){
                    context.report(node,onNavigatemsg)
                }
            }

        };
    }
};
