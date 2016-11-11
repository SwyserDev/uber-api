var request = require("request");

var base_url = "http://localhost:8080/api/"

describe("GIVEN the API server is running", function() {
  describe("WHEN getBogs is called", function() {
    it("THEN the status code should be 200", function(done) {
      request.get(base_url + '/blog', function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    it("THEN it should return a list of blogs", function(done) {
      request.get(base_url + '/blog', function(error, response, body) {
        let jsonRes = JSON.parse(body);
        expect(jsonRes.blogs.length).toBe(0);
        done();
      });
    });
  });

  describe("WHEN blog/:id is called", function() {
    it("THEN the status code should be 200", function(done) {
      request.get(base_url + '/blog/44', function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    it("THEN it should return the blog relative to the id specified", function(done) {
      request.get(base_url + '/blog/44', function(error, response, body) {
        let jsonRes = JSON.parse(body);
        expect(parseInt(jsonRes.id)).toBe(44);
        done();
      });
    });
  });
});