const chai  = require('chai');
const expect = require('chai').expect;

const Event = require('./models/Event');

describe('server', function() {
    it('should return object on GET route', function() {
        expect(Event.find()).to.be.a('object');
    });
});