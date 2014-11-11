$(document).ready(function(){

  //$('#display-screen').text('0');

  function displayOutput(){
    return $('#display-screen').val();
  }

  $("a").click(function(){
    press($(this).text());
  });

  var currentNumber = '';
  var newNumber = '';

  function press(buttonValue){

    function calculate(){
      newNumber = (currentNumber + buttonValue);
      currentNumber = '';

      $('#display-screen').text(newNumber);
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
        $('#display-screen').text(newNumber.substring(0,10) * 1);
        //currentNumber = newNumber;
        break;
      case 'C':
        currentNumber = '';
        newNumber = '';
        $('#display-screen').text(currentNumber);
      case '+/-':
        //sign
        break;
      case '.':
      //  if(currentNumber === undefined || currentNumber.indexOf('.') === -1){
          currentNumber = $('#display-screen').text();
          $('#display-screen').text(currentNumber += buttonValue);
      //  }
        break;
      default:
        console.log(buttonValue);
        currentNumber = $('#display-screen').text() + buttonValue;
        $('#display-screen').text(currentNumber);
    }
  }
});
