const generateDocumentation = require('./node_modules/api-documentation-generator');

// Generate documentation for all .js files in the src directory
generateDocumentation(['src/**/*.js'], 'docs');
