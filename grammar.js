/**
 * @file A simple tree-sitter grammar for pseint
 * @author IDEALEMX <idemx@proton.me>
 * @license GNU General Public License v3.0
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

export default grammar({
  name: "pseint",

  rules: {
    // TODO: add the actual grammar rules
    source_file: $ => "hello"
  }
});
