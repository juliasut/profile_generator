const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let funkyProfile = {};
let sentence = "";
let delay = 1000;

const typewrite = function (sentence) {
  for (const char of sentence) {
        
    delay += 50;
    setTimeout(() => {
      process.stdout.write(char);
    }, delay);
  };
  return(sentence)
}


rl.question('Please type any letter combination?  ', (answer1) => {
  funkyProfile.answer1 = answer1;

  rl.question('What is your name?  ' , (answer2) => {
    funkyProfile.answer2 = answer2;

    rl.question(`Whats would be your cat's name?  `, (answer3) => {
      funkyProfile.answer3 = answer3;

      rl.close();
      
      console.log(`Here's comes your funky profile:`)
      typewrite(`...Hi, I'mpwd ${funkyProfile.answer2} and myalterego is a superhero ${funkyProfile.answer3} from planet ${answer1}!`);


    });

  });

});

// rl.question('', (answer) => {});