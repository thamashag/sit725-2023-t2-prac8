const { expect } = require("chai");
const request = require("request");
let cat = {
    title: '',
    subTitle: '',
    path: '',
    description: ''
};

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
        request.post({ url: 'http://localhost:3000/api/cat', form: cat }, function(error, response, body){
            // Check the status code
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
});

describe('Test DELETE API', function(){
    it('should delete a cat', function(done){
        request.delete({ url: 'http://localhost:3000/api/cat', form: cat }, function(error, response, body){
            // Check the status code
            done();
        });
    });
});




