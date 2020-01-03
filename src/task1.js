const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const reverse = text => text.split('').reverse().join('');


function run() {
  rl.question('Enter a text\n', (answer) => {
    const reversedText = reverse(answer);

    console.log(`Your text when reversed looks like ${reversedText}`);

    rl.close();
  });
}

if (module.parent) {
  module.exports = run;
} else {
  run();
}
