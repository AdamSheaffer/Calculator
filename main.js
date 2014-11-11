$(document).ready(function(){

  //$('#display-screen').text('0');

  function displayOutput(){
    return $('#display-screen').text();
  }
//4 + 6 + 2 =
  $("a").click(function(){
    press($(this).text());
  });

  var currentNumber = '';
  var newNumber = '';

  function press(buttonValue){

    function calculate(){
        if (currentNumber !== ""){
            if (newNumber !== ""){
              newNumber = eval(newNumber + currentNumber);
              $('#display-screen').text(newNumber + buttonValue);
              newNumber = newNumber + buttonValue;
              currentNumber = '';
              //debugger;
            } else {
              $('#display-screen').text(currentNumber + buttonValue);
              newNumber = currentNumber + buttonValue;
              currentNumber = '';
            }
        }
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
        debugger;
        newNumber = eval(newNumber + currentNumber).toString();
        //currentNumber = newNumber;
        currentNumber = '';
        $('#display-screen').text(newNumber.substring(0,10) * 1);
        break;
      case 'C':
        currentNumber = '';
        newNumber = '';
        $('#display-screen').text(currentNumber);
      case '+/-':
        //sign
        break;
      case '.':
       // if(currentNumber.indexOf('.') === -1){
          currentNumber = $('#display-screen').text();
          $('#display-screen').text(currentNumber + buttonValue);
       // }
        break;
      default:
        $('#display-screen').text(buttonValue);
        currentNumber = $('#display-screen').text();
        console.log(currentNumber);
    }
  }
});
