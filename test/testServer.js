const { expect } = require("chai");
const request = require("request");
let cat;

describe('Test GET API', function(){
    it('should return a statusCode of 200', function(done){
        request('http://localhost:3000/api/cat', function(error, response, body){
            // Check the status code
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
});

describe('Test POST API', function(){
    it('should return a statusCode of 200', function(done){
        const cat = { title: 'cat6', subtitle: 'cat', path: 'images/kitten-2.jpg', description: 'cat'};

        request.post({ url: 'http://localhost:3000/api/cat', form: cat }, function(error, response, body){
            // Check the status code
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
});




