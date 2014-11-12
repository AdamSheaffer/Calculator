$(document).ready(function(){

  $('#display-screen').text('0');

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
        newNumber = eval(newNumber + currentNumber).toFixed(9);
        $('#display-screen').text(eval(newNumber).toString());
        currentNumber = $('#display-screen').text();
        //debugger;
        newNumber = '';
        break;
      case 'C':
        currentNumber = '';
        newNumber = '';
        $('#display-screen').text('0');
      case '+/-':
        //sign
        break;
      case '.':
        if(currentNumber.indexOf('.') === -1){
            if($('#display-screen').text() === '0'){
               $('#display-screen').text('0' + buttonValue);
               currentNumber = $('#display-screen').text();
            } else {
            $('#display-screen').text(currentNumber + buttonValue);
               currentNumber = $('#display-screen').text();
            }
        } 
        break;
      default:
        if ($('#display-screen').text() === '0'){
            if(buttonValue !== '0'){
               $('#display-screen').text(buttonValue);
               currentNumber = $('#display-screen').text();
               console.log(currentNumber);
            }
            } else {
            if (currentNumber.length < 11){
               $('#display-screen').text(currentNumber + buttonValue);
               currentNumber = $('#display-screen').text();
            }
        }
    }
  }
});
var operatorsAndZero = ['0', '+', '-', '*', '/']
