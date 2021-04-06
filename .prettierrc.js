// Documentation for this file: https://prettier.io/docs/en/configuration.html
module.exports = {
  trailingComma: "all",
  arrowParens: "avoid",
  // Use .gitattributes to manage newlines
  endOfLine: "auto",
  // We use a larger print width because Prettier's word-wrapping seems to be tuned
  // for plain JavaScript without type annotations.
  printWidth: 110,
};
