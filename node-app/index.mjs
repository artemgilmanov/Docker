import fs from 'fs';

fs.appendFile('message.txt', 'Hello Node.js', (err) => {
  if (err) throw err;
  console.log('The file was appended!');
});

setTimeout(() => {
  console.log('This message is delayed by 20 seconds');
}, 20000);
