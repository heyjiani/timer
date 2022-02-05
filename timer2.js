process.stdin.setRawMode(true);
process.stdin.setEncoding('utf8')
process.stdin.on('data', handleUserInput);

function handleUserInput (key) {

  // The user can use ctrl + c to exit the program, 
  const ctrlC = '\u0003';
  if (key === ctrlC) {
    process.stdout.write(`Thanks for using me, ciao! （＾・ω・＾) \n`);
    process.exit();
  }

  // The user can press b and it should beep right away
  if (key === 'b') {
    process.stdout.write('\x07');
  }

  // The user can input any number from 1 to 9 and it should
  // immediately output "setting timer for x seconds...", and
  // beep after that number of seconds has passed  
  if (key > 0) {
    process.stdout.write(`setting timer for ${key} seconds...\n`);
    setTimeout(() => {
      process.stdout.write('\x07');
    }, key * 1000)
  }
};