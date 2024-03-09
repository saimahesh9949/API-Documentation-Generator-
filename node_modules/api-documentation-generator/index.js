const jsdoc = require('jsdoc-api');
const fs = require('fs');

function generateDocumentation(sourceFiles, destination) {
  jsdoc.renderSync({ source: sourceFiles, destination: destination });
}

module.exports = generateDocumentation;
