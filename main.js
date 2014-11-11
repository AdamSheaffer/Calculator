$(document).ready(function(){

  $('#display-screen').text('0');

  function displayOutput(){
    return $('#display-screen').val();
  }

  $("#numbers > a").not("#clear").click(function(){
    press($(this).text());
    $('#display-screen').text(number);
  });

  var currentNumber = '';
  var newNumber = '';

  function press(buttonValue){

    function calculate(){
      newNumber = (currentNumber + buttonValue);
      currentNumber = '';

      $('#display-screen').val(newNumber);
    }

    switch(buttonValue) {
      case '+':
        calculate();
        break;
      case '-':
        calculate();
        break;
      case '*':
        calculate();
        break;
      case '/':
        calculate();
        break;
      case '=':
        newNumber = eval(currentNumber).toString();
        $('#display-screen').val(newNumber.substring(0,10) * 1);
        //currentNumber = newNumber;
        break;
      case 'C':
        // clear
      case '+/-':
        //sign
        break;
      case '.':
      //  if(currentNumber === undefined || currentNumber.indexOf('.') === -1){
          currentNumber = $('#display-screen').val();
          $('#display-screen').val(currentNumber += buttonValue);
      //  }
        break;
      default:
        console.log(buttonValue);
        currentNumber = $('#display-screen').val() + buttonValue;
        $('#display-screen').val(currentNumber);
    }
  }
});
