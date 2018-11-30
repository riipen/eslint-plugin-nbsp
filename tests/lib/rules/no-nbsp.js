/**
 * @fileoverview Use of &amp;nbsp is not allowed.
 * @author Jordan Ell
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-nbsp"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
  }
});

const ERROR_MSG_NBSP = 'Use of &nbsp is forbidden.';

var ruleTester = new RuleTester();

ruleTester.run("no-nbsp", rule, {

    valid: [
        '<span>foo</span>',
    ],

    invalid: [
        {
            code: "<span>&nbsp</span>",
            errors: [{
                message: ERROR_MSG_NBSP,
                type: 'Literal'
            }]
        }
    ]
});
