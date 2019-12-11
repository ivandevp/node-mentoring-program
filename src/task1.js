const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const reverse = text => text.split('').reverse().join('');

rl.question('Enter a text\n', (answer) => {
  const reversedText = reverse(answer);

  console.log(`Your text when reversed looks like ${reversedText}`);

  rl.close();
});
