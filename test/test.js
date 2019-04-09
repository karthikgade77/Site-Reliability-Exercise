var request = require('supertest');
var app = require('../app.js');
 
describe('GET /', function() {
  it('respond with Hello Cardlytics', function(done) {
    request(app).get('/').expect('Hello, Cardlytics! What a beautiful day!', done);
  });
});
