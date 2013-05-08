/*globals describe:true, it:true, expect:true, beforeEach:true */
if ( typeof define !== 'function') {
    var define = require('amdefine')(module);
}
if ( typeof expect !== 'function') {
    var expect = require('expect.js');
}

define(['app/async'], function(answers) {
    describe('async behavior', function() {

        it('you should understand how to use promises to handle asynchronicity', function(done) {
            var finished = 0;
            var total = 2;

            function finish(done) {
                if (++finished === total) {
                    done();
                }
            }

            answers.async(true).then(function(result) {
                expect(result).to.eql(true);
                finish(done);
            });

            answers.async('success').then(function(result) {
                expect(result).to.eql('success');
                finish(done);
            });
        });

        it('you should be asynchronuous', function() {
            var flag = false;
            answers.async(true).then(function(result) {
                flag = true;
            });
            expect(flag).to.eql(false);
        });
    });
});
