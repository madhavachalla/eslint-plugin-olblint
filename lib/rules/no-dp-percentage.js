/**
 * @fileoverview should not use hardcoded dp and percentage
 * @author Dhananjai
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "should not use hardcoded dp and percentage",
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
        const msg = "Please use constants for dp, % and px.";
        return {

            AssignmentExpression(node){
                try{
                    if(node.right.type === "BinaryExpression" && node.right.right.type === "Literal" && (node.right.right.value.includes("dp") || node.right.right.value.includes("%") || node.right.right.value.includes("px"))){
                        context.report(node,msg)
                    }
                    if(node.right.type === "Literal" && (node.right.value.includes("dp") || node.right.value.includes("%") || node.right.value.includes("px")) ){
                        context.report(node,msg)
                    }
                }catch(err){
                    console.log(err)
                }
            },

            VariableDeclarator(node){
                try{
                    if(node.type === "VariableDeclarator" &&  node.init.type === "Literal" && (node.init.value.includes("dp") || node.init.value.includes("px") || node.init.value.includes("%"))){
                        context.report(node,msg)
                    }
                    if(node.type === "VariableDeclarator" && node.init.type === "BinaryExpression" && node.init.right.type === "Literal" && (node.init.right.value.includes("dp") || node.init.right.value.includes("%") || node.init.right.value.includes("px"))){
                        context.report(node,msg)
                    }
                }catch(err){
                    console.log(err)
                }
            },
 
            ReturnStatement(node){
                try{
                    if(node.argument.type === "BinaryExpression" && node.argument.right.type === "Literal" && (node.argument.right.value.includes("dp") || node.argument.right.value.includes("px") || node.argument.right.value.includes("%"))){
                        context.report(node,msg)
                    }
                }catch(err){
                    console.log(err)
                }
            },
 
            Property(node){
                try{
                    if(node.type === "Property" && node.value.type === "Literal" && typeof(node.value.value) === "string" && (node.value.value.includes("dp") || node.value.value.includes("px") || node.value.value.includes("%"))){
                        context.report(node,msg)
                    }
                    if(node.type === "Property" && node.value.type === "BinaryExpression" && node.value.right.type === "Literal" && typeof(node.value.right.value) === "string" && (node.value.right.value.includes("dp") || node.value.right.value.includes("px") || node.value.right.value.includes("%"))){
                        context.report(node,msg)
                    }
                }catch(err){
                    console.log(err)
                }
            }
        };
    }
};
