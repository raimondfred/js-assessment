/*jshint expr:true */
/*globals describe:true, it:true, expect:true, beforeEach:true */
if ( typeof define !== 'function') {
    var define = require('amdefine')(module);
}
if ( typeof expect !== 'function') {
    var expect = require('expect.js');
}

define(['underscore', 'app/functions'], function(_, answers) {

    describe('functions', function() {
        var sayItCalled = false;
        var sayIt = function(greeting, name, punctuation) {
            sayItCalled = true;
            return greeting + ', ' + name + (punctuation || '!');
        };

        beforeEach(function() {
            sayItCalled = false;
        });

        it('you should be able to return a function from a function', function() {
            expect(answers.functionFunction('Hello')('world')).to.eql('Hello, world');
            expect(answers.functionFunction('Hai')('can i haz funxtion?')).to.eql('Hai, can i haz funxtion?');
        });

        it('you should be able to use closures', function() {
            var arr = [Math.random(), Math.random(), Math.random(), Math.random()];
            var doSomeStuff;

            doSomeStuff = function(x) {
                return x * x;
            };

            var funcs = answers.makeClosures(arr, doSomeStuff);
            expect(funcs).to.have.length(arr.length);

            for (var i = 0; i < arr.length; i++) {
                expect(funcs[i]()).to.eql(doSomeStuff(arr[i]));
            }
        });

        it('you should be able to use arguments', function() {
            var a = Math.random(), b = Math.random(), c = Math.random(), d = Math.random();

            expect(answers.useArguments(a)).to.eql(a);
            expect(answers.useArguments(a, b)).to.eql(a + b);
            expect(answers.useArguments(a, b, c)).to.eql(a + b + c);
            expect(answers.useArguments(a, b, c, d)).to.eql(a + b + c + d);
        });
    });
});
