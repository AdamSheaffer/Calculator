/* global describe, it */

;(function(){
  'use strict';

  beforeEach(function(){
    $('#display-screen').val('');
  });

  describe('Entering numbers', function(){

    describe('display output', function(){
      it('should return the value of the display', function(){
        $('#display-screen').val(1.23);
        assert.equal(displayOutput(), 1.23);

        $('#display-screen').val(2.34);
        assert.equal(displayOutput(), 2.34);
      })
    })

    describe('press', function(){
      it('should display the number pressed', function(){
        assert.equal(displayOutput(), '');
        press('1');
        assert.equal(displayOutput(), 1);
      })
    })

    describe('Entering the decimal number 7 . 8 9', function(){
      it('should display 7.89', function(){
        press('7');
        press('.');
        press('8');
        press('9');
        assert.equal(displayOutput(), 7.89);
      });
    });

    describe('Addition', function(){
      it('should display 2', function(){
        press('1');
        press('+');
        press('1');
        press('=');
        assert.equal(displayOutput(), 2);
      });
    });

    describe('Add after equal', function(){
      it('should display 4', function(){
        press('1');
        press('+');
        press('1');
        press('+');
        press('2');
        press('=');
        assert.equal(displayOutput(), 4);
      })
    })

    describe('Add a decimal', function(){
      it('should display .7', function(){
        press('.');
        press('3');
        press('+');
        press('.');
        press('4');
        press('=');
        assert.equal(displayOutput(), 0.7);
      })
    })

    describe('subtraction', function(){
      it('should display 1', function(){
        press('7');
        press('-');
        press('6');
        press('=');
        assert.equal(displayOutput(), 1);
      })
    });

    describe('subtrating to a negative', function(){
      it('should display -2', function(){
        press('7');
        press('-');
        press('9');
        press('=');
        assert.equal(displayOutput(), -2);
      })
    })

    describe('subtracting and adding after hitting equal', function(){
      it('should display -9', function(){
        press('7');
        press('-');
        press('9');
        press('=');
        press('-');
        press('7');
        press('=');
        assert.equal(displayOutput(), -9);
      });
    });

    describe('division', function(){
      it('should display 3', function(){
        press('6');
        press('/');
        press('2');
        press('=');
        assert.equal(displayOutput(), 3);
      })
    })

    describe('division with repeating decimals', function(){
      it('should display 0.333333', function(){
        press('1');
        press('/');
        press('3');
        press('=');
        assert.equal(displayOutput(), 0.333333);
      })
    })
  });
})();
