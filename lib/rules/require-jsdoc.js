/**
 * @fileoverview Rule to check for jsdoc presence.
 * @author Shivam
 */
"use strict";

module.exports = {
    meta: {
        docs: {
            description: "require JSDoc comments in prototype declaration",
            category: "Stylistic Issues",
            recommended: false,
            url: "https://eslint.org/docs/rules/require-jsdoc"
        },

        schema: [
        ]
    },

    create(context) {
        const source = context.getSourceCode();
        /**
         * Report the error message
         * @param {ASTNode} node node to report
         * @returns {void}
         */
        function report(node) {
            context.report({ node, message: "Missing JSDoc comment." });
        }

        /**
         * Check if the jsdoc comment is present or not.
         * @param {ASTNode} node node to examine
         * @returns {void}
         */
        function checkJsDoc(node) {
            const jsdocComment = source.getJSDocComment(node);

            if (!jsdocComment) {
                report(node);
            }
        }

        return {
            FunctionExpression(node) {
                var parent = node.parent;
                if (parent.type === "AssignmentExpression" 
                  && parent.left.type === "MemberExpression"
                  && parent.left.object.property.type === "Identifier"
                  && parent.left.object.property.name === "prototype"
                  && parent.left.property.type === "Identifier"
                ) {
                    checkJsDoc(node);
                }
            }
        };
    }
};