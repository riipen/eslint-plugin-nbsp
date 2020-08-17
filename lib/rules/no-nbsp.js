/**
 * @fileoverview Use of &nbsp is not allowed.
 * @author Jordan Ell
 */
"use strict";

const ERROR_MSG_NBSP = 'Use of &nbsp is forbidden.';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "problem",
        docs: {
            description: "Use of &nbsp is forbidden.",
            category: "Possible Errors",
            recommended: false,
            suggestion: false,
            url: "https://github.com/riipen/eslint-plugin-nbsp/blob/master/docs/rules/no-nbsp.md"
        },
        schema: []
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
            Literal: function(node) {
                if (node.raw && typeof node.raw === 'string' && node.raw.includes('&nbsp')) {
                    return context.report({
                        node: node,
                        message: ERROR_MSG_NBSP,
                    });
                }
            }
        };
    }
};
