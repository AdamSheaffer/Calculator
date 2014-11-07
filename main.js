function displayOutput(){
  return $('#display-screen').val()
}

// 4 + 6 + 8 =

var currentNumber = '';
var newNumber = '';

function press(buttonValue){
  switch(buttonValue) {
    case '+':
      newNumber = eval(newNumber + buttonValue + currentNumber);
      $('#display-screen').val(eval(newNumber));
      break;
    case '-':
      $('#display-screen').val(currentNumber += buttonValue);
      break;
    case '*':
      $('#display-screen').val(currentNumber += buttonValue);
      break;
    case '/':
      $('#display-screen').val(currentNumber += buttonValue);
      break;
    case '=':
      newNumber = eval(currentNumber).toString();
      $('#display-screen').val(newNumber.substring(0,8));
      currentNumber = newNumber;
      break;
    case 'C':
      // clear
    case '+/-':
      //sign
      break;
    case '.':
        currentNumber = $('#display-screen').val();
        $('#display-screen').val(currentNumber += buttonValue);
      break;
    default:
      currentNumber = $('#display-screen').val();
      $('#display-screen').val(currentNumber += buttonValue);
  }
}
