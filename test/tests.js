const test = QUnit.test;
function fizzBuzz(integer) {
    let result = '';
    const wordOne = 'fizz';
    const wordTwo = 'buzz';

    
    if(integer % 15 === 0) {
        result = wordOne + wordTwo;
        
    }
    else if(integer % 5 === 0) {
        result = wordTwo;
    }
    else if(integer % 3 === 0) {
        result = wordOne;
    }
    else {
        result = integer;
    }

    return result;

}


test('is it divisible by 15', function(assert) {
    
    const integer = 15;
    const expect = 'fizzbuzz';
    const result = fizzBuzz(integer);
    assert.equal(expect, result);
});

test('is it divisible by 5', function(assert) {
    
    const integer = 5;
    const expect = 'buzz';
    const result = fizzBuzz(integer);
    assert.equal(expect, result);
});
test('is it divisible by 3', function(assert) {
    
    const integer = 3;
    const expect = 'fizz';
    const result = fizzBuzz(integer);
    assert.equal(expect, result);
});
test('not divisible by 5, 3, or 15', function(assert) {
    
    const integer = 7;
    const expect = integer;
    const result = fizzBuzz(integer);
    assert.equal(expect, result);
});