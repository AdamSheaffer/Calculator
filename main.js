function displayOutput(){
  return $('#display-screen').val()
}

// 4 + 6 + 8 =

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
      currentNumber = $('#display-screen').val() + buttonValue
      $('#display-screen').val(currentNumber);
  }
}
