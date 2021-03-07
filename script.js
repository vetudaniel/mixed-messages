const prompt = require('prompt-sync')();
const Confirm = require('prompt-confirm');


const messages = {
    good: ['Nice','LOL GZ','Thats it!','Way to go!','This is the way!', 'Congradulations'],
    neutral: ['You can do better!', 'Focus on yourself!', 'Tomorrow will be your day!'],
    bad:['Save your energy!', 'Be 1% better every day!', 'Dont stress it!', 'You got this!'],
    lucky:['Play lottery!', 'Lucky you ! :D', 'Make your own fortune!', 'WHOA!']
}

const agree = 'Thanks for agreeing'

function generateRandomNumber(num) {
    return Math.floor(Math.random() * num)
  };
  
const confirm = new Confirm('Do you Agree?')
const newQuestion = new Confirm('Want another advice?')
const restart = new Confirm('Try again?')

const name = prompt("Hello and welcome to Vaniel's mixed-messages Project. To begin type in your name please. Name : ");
console.log(`Hello there ${name}. This program will help you with some general advices.  `);



const start = () => {
    confirm.ask(function(answer){
        if(answer === true){
            console.log(agree)
            const mood = prompt("How are you feeling today? (good/neutral/bad) . Your answer: ");
            if(mood ==="good"){
                getAdvice('good')
            }else if(mood ==="neutral"){
                getAdvice('neutral')
            }else if(mood ==="bad"){
                getAdvice('bad')
            }else{
                getAdvice('lucky')
            }
        }else{
            console.log(`That's okay ${name}. Hope we will meet again`)
        }
    });
};
  
  
const getAdvice = (mood) => {
            if (mood === 'good'){
                console.log(messages.good[generateRandomNumber(messages.good.length)])
                newQuestion.ask(function(answer){
                    if(answer === true){
                        console.log(messages.good[generateRandomNumber(messages.good.length)])
                        tryAgain()
                    }else{
                        console.log('Okay. I understand')
                    }
                });
            }else if(mood ==="neutral"){
                console.log(messages.neutral[generateRandomNumber(messages.neutral.length)])
                newQuestion.ask(function(answer){
                    if(answer === true){
                        console.log(messages.neutral[generateRandomNumber(messages.neutral.length)])
                        tryAgain()
                    }else{
                        console.log('Okay. I understand')
                    }
                });
            }else if(mood ==="bad"){
                console.log(messages.bad[generateRandomNumber(messages.bad.length)])
                newQuestion.ask(function(answer){
                    if(answer === true){
                        console.log(messages.bad[generateRandomNumber(messages.bad.length)])
                        tryAgain()
                    }else{
                        console.log('Okay. I understand')
                    }
                });
            }else{
                console.log(messages.lucky[generateRandomNumber(messages.lucky.length)])
                newQuestion.ask(function(answer){
                    if(answer === true){
                        console.log(messages.lucky[generateRandomNumber(messages.lucky.length)])
                        tryAgain()
                    }else{
                        console.log('Okay. I understand')
                    }
                });
            }
};
        
        
     
function tryAgain(){
    restart.ask(function(answer){
        if(answer === true){
            start()
        }else{
            console.log('As you wish!')
        }
    });
};
 
 

start();


