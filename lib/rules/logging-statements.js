/**
 * @fileoverview No logging statements should be there. As in release mode 
 * @author Shivam
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "No logging statements should be there. As in release mode ",
            category: "Fill me in",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {

        var propertMap =  {
            kony: ["print"],
            console: ["log", "warn"]
        }

        function checkValid (objectName, propertName) {
            if (propertMap[objectName] && propertMap[objectName].indexOf(propertName) > -1) {
                return false;
            }
            return true;
        }

        return {
            "MemberExpression": function (node) {
                if (node.object.type === "Identifier" && node.property.type === "Identifier" && !checkValid(node.object.name, node.property.name)) {
                    context.report(node, "Avoid using logging statements")
                }
            }
        };
    }
};
