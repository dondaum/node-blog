'use strict';

//const app = require(__base + 'app');
const expect = require('chai').expect;
const chai = require('chai');
const chaiHttp = require('chai-http');
const request = require('chai').request;
const app = require('./../../app');
chai.use(chaiHttp);



describe('Controller specs for Welcome controller', function() {


  describe('/GET index welcome routes', () => {
    it('responds with status 200', (done) => {
      chai.request(app)
        .get('/')
        .end(function(err, res) {
          expect(res).to.have.status(200);
          done();
        });
    });

    it('It has the right text on page', (done) => {
      chai.request(app)
        .get('/')
        .end(function(err, res) {
          expect(res.text).to.include('This is the TDD welcome page');
          done();
        });
    });

  });

  describe('/GET about routes', () => {
    it('responds with status 200', (done) => {
      chai.request(app)
        .get('/about')
        .end(function(err, res) {
          expect(res).to.have.status(200);
          done();
        });
    });

    it('It has the right text on page', (done) => {
      chai.request(app)
        .get('/about')
        .end(function(err, res) {
          expect(res.text).to.include('This is the about page');
          done();
        });
    });

  });

});
