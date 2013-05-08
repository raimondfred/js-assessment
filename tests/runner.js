/*globals mocha:true */
var tests = [
    'tests/app/bestPractices',
    'tests/app/objects',
    'tests/app/functions',
    'tests/app/async',
    'tests/app/arrays',
    'tests/app/recursion'
];

requirejs(tests, function() {
    if ( typeof mocha !== 'undefined') {
        mocha.run();
    }
});
