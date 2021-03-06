/* global describe, it */

;(function(){
  'use strict';

  beforeEach(function(){
    $('#display-screen').text('');
    var currentNumber = '';
    var newNumber = '';
  });

  function type(){
    var args = Array.prototype.slice.call(arguments);
    args.forEach(function(arg){
      press(arg);
    });
  }

  describe('Entering numbers', function(){

    describe('displayoutput', function(){
      it('should return the value of the display', function(){
        $('#display-screen').text('1.23');
        assert.equal(displayOutput(), '1.23');

        $('#display-screen').text(2.34);
        assert.equal(displayOutput(), 2.34);
      })
    })

    describe('type', function(){
      it('should display the number typed', function(){
        assert.equal(displayOutput(), '');
        type(1);
        assert.equal(displayOutput(), 1);
      })
    })

    describe('type', function(){
      it('should display the number typed', function(){
        assert.equal(displayOutput(), '');
        type(2, 3);
        assert.equal(displayOutput(), 23);
      })
    })

    describe('Entering the decimal number 7 . 8 9', function(){
      it('should display 7.89', function(){
        type(7);
        type('.');
        type(8);
        type(9);
        assert.equal(displayOutput(), 7.89);
      });
    });
  });

  describe('Multiplying', function(){
    describe('2 * 3 =', function(){
      it('should be 6', function(){
        type(2, '*', 3, '=')
        assert.equal(displayOutput(), '6');
      });
    });

    describe('1 * . 2 = .2', function(){
      it('should be .2', function(){
        type(1, '*', '.', 2, '=')
        assert.equal(displayOutput(), '0.2');
      });
    });

    describe('. 1 2 5 * . 5 =', function(){
      it('should be .0625', function(){
        type('.', 1, 2, 5, '*', '.', 5, '=')
        assert.equal(displayOutput(), '0.0625');
      });
    });

    describe('0 * 3 =', function(){
      it('should be .0', function(){
        type(0, '*', 3, '=');
        assert.equal(displayOutput(), '0');
      });
    });

    describe('3 . 1 4 * 0 =', function(){
      it('should be .0', function(){
        type(3, '.', 1, 4, '*', 0, '=')
        assert.equal(displayOutput(), '0');
      });
    });

    describe('3 . 1 4 * . 0 =', function(){
      it('should be 0', function(){
        type(3, '.', 1, 4, '*', '.', 0, '=')
        assert.equal(displayOutput(), '0');
      });
    });

    describe('3 * 4 * 2 =', function(){
      it('should be 24', function(){
        type(3, '*', 4, '*', 2, '=')
        assert.equal(displayOutput(), '24');
      });
    });
    describe('3 * 4 + 2 =', function(){
      it('should be 14', function(){
        type(3, '*', 4, '+', 2, '=')
        assert.equal(displayOutput(), '14');
      });
    });
    describe('3 * 0 * 2 =', function(){
      it('should be 0', function(){
        type(3, '*', 0, '*', 2, '=')
        assert.equal(displayOutput(), '0');
      });
    });
  });

  describe('Adding', function () {
    describe('7 . 8 9 + 1 + 2 =', function(){
      it('should be 10.89', function () {
        type(7, '.', 8, 9, '+', 1, '+', 2, '=');
        assert.equal(displayOutput(), '10.89');
      //  debugger;
      });
    });
    describe('7 . 8 9 + 1 . 0 0 + 2 =', function(){
      it('should be 10.89', function () {
        type(7);
        type('.');
        type(8);
        type('9');
        type('+');
        type(1);
        type('.');
        type(0);
        type(0);
        type('+');
        type(2);
        type('=');
        assert.equal(displayOutput(), '10.89');
      });
    });
    describe('1 + 1 =', function(){
      it('should be 2', function () {
        type(1);
        type('+');
        type(1);
        type('=');
        assert.equal(displayOutput(), '2');
      });
    });
    describe('1 + 1 + 1 + 1 =', function(){
      it('should be 4', function () {
        type(1, '+', 1, '+',1, '+', 1, '=');
        assert.equal(displayOutput(), '4');
      });
    });
    describe('0 . 1 + . 2 =', function(){
      it('should be 0.3', function () {
        type(0);
        type('.');
        type(1);
        type('+');
        type('.');
        type(2);
        type('=');
        assert.equal(displayOutput(), '0.3');
      });
    });
    describe('. 1 1 1 1 1 1 1 1 + . 2 2 2 2 2 2 2 2 =', function(){
      it('should be 0.3', function () {
        type('.');
        type(1);
        type(1);
        type(1);
        type(1);
        type(1);
        type(1);
        type(1);
        type(1);
        type('+');
        type('.');
        type(2);
        type(2);
        type(2);
        type(2);
        type(2);
        type(2);
        type(2);
        type(2);
        type('=');
        assert.equal(displayOutput(), '0.33333333');
      });
    });
    xdescribe('. 1 1 .1  + . 2 2 2  =', function(){
      it('should be 0.3', function () {
        type('.');
        type(1);
        type(1);
        type('.');
        type(1);
        type('+');
        type('.');
        type(2);
        type(2);
        type(2);
        type('=');
        assert.equal(displayOutput(), '0.333');
      });
    });
  });
})();
