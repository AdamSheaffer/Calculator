$(document).ready(function(){

  function displayOutput(){
    return $('#display-screen').text();
  }

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
        $('#display-screen').text(newNumber.substring(0,10) * 1);
        currentNumber = $('#display-screen').text();
        newNumber = '';
        break;
      case 'C':
        currentNumber = '';
        newNumber = '';
        $('#display-screen').text(currentNumber);
      case '+/-':
        //sign
        break;
      case '.':
        if(currentNumber.indexOf('.') === -1){
          $('#display-screen').text(currentNumber + buttonValue);
          currentNumber = $('#display-screen').text();
        }
        break;
      default:
        if($('#display-screen').text() === -1){
          $('#display-screen').text(buttonValue);
          currentNumber = $('#display-screen').text();
          console.log(currentNumber);
        } else{
          $('#display-screen').text(currentNumber + buttonValue);
          currentNumber = $('#display-screen').text();
        }
    }
  }
});
