const { use, expect , request } =require('chai');
const chaiHttp = require('chai-http');
const app = require('../app'); 


use(chaiHttp);


describe('App', function () {

  describe('GET /', function () {
    it('should return status 200 and the correct message', async function () {
      const res = await request(app).get('/');
      expect(res).to.have.status(200);
      expect(res.text).to.equal('Hello, Jenkins, Docker, and Kubernetes!');
    });
  });


  describe('Server Setup', function () {
    it('should start the server without errors', function (done) {
      request(app)
        .get('/')
        .end(function (err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done();
        });
    });
  });
});
