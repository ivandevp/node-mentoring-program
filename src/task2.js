const csvtojson = require('csvtojson');
const fs = require('fs');
const path = require('path');
const { pipeline } = require('stream');

const csvFilePath = path.resolve(__dirname, './csv/node_mentoring_t1_2_input_example.csv');
const txtFilePath = path.resolve(__dirname, './txt/output.txt');

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
