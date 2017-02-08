const should = require('chai').should();

const fizzBuzzer = require('../fizzbuzzer');


describe('fizzBuzzer', function() {

  it('should return "fizz-buzz" for multiples of 15', function () {
    [15, 30, 45].forEach(function(num){
      var answer = fizzBuzzer(num)
      answer.should.equal('fizz-buzz')

    })
  })
})