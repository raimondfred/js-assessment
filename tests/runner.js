/*globals mocha:true */
var tests = [
    'tests/app/bestPractices',
    'tests/app/async',
    'tests/app/objects',
    'tests/app/functions',
    'tests/app/recursion'
];

if ( typeof window !== 'undefined') {
    tests.push('tests/app/async');
} else {
    var requirejs = require('requirejs');
    requirejs.config({
        baseUrl: __dirname + '/../',
        nodeRequire: require,
        paths: {
            // Libraries
            underscore: 'lib/underscore',

            // Shim Plugin
            use: 'lib/plugins/use',
            text: 'lib/plugins/text',
            jquery: 'lib/jquery'
        },

        use: {
            underscore: {
                attach: '_'
            }
        }
    });
}

requirejs(tests, function() {
    if ( typeof mocha !== 'undefined') {
        mocha.run();
    }
});
