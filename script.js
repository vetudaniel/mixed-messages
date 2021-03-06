const prompt = require('prompt-sync')();
const Confirm = require('prompt-confirm');


const messages = {
    array0: [],
    array1: [],
    array2:[]
}


function generateRandomNumber(num) {
    return Math.floor(Math.random() * num)
  };
  
  const confirm = new Confirm('Do you Agree?')


  const name = prompt("Hello and welcome to Vaniel's mixed-messages Project. To begin type in your name please. Name : ");
  
  console.log(`Hello there ${name}. This program will help you with some general advices.  `);
  
  
  confirm.ask(function(answer) {
    if(answer === true){
        console.log('Great')
    }else if(answer === false){
        console.log('Thats OK. Goodbye!')
    }
  });
 
