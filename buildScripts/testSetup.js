// This file ins't transpiled, so must use CommonJS and ES5

// Reguster babel to transpile before out tests run.
require('babel-register')();

// Disable webpack features that Mocha doesn't understand.
require.extensions['.css'] = function() {};
