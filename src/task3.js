import csvtojson from 'csvtojson';
import fs from 'fs';
import { resolve } from 'path';
import readline from 'readline';
import { pipeline } from 'stream';

const task1 = () => {
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
};

const task2 = () => {
  const csvFilePath = resolve(__dirname, './csv/node_mentoring_t1_2_input_example.csv');
  const txtFilePath = resolve(__dirname, './txt/output.txt');

  const readStream = fs.createReadStream(csvFilePath);
  const writeStream= fs.createWriteStream(txtFilePath);

  pipeline(
    readStream,
    csvtojson(),
    writeStream,
    (error) => {
      if (error) {
        console.log(error);
        return;
      }

      console.log('CSV has been converted to TXT');
    }
  );
};

task1();
task2();
