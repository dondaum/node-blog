'use strict';

const expect = require('chai').expect;
const chai = require('chai');
const chaiHttp = require('chai-http');
const request = require('chai').request;
const app = require('../app');
chai.use(chaiHttp);


// https://groundberry.github.io/development/2016/12/10/testing-express-with-mocha-and-chai.html

describe('Testing App routing', function() {

  describe('/GET index routes', function() {
    it('responds with status 200', function(done) {
      chai.request(app)
        .get('/')
        .end(function(err, res) {
          expect(res).to.have.status(200);
          done();
        });
    });
  });

});



// basic testing true = true and false = false

describe('First test', () => {
  it('Should assert true to be true', () => {
    expect(true).to.be.true;
  });
  it('should assert false to be false', () => {
    expect(false).to.be.false;
  });
});
