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
  const bKey = `\u0062`; 
  if (key === bKey) {
    process.stdout.write('\x07');
  }

  // The user can input any number from 1 to 9 and it should
  // immediately output "setting timer for x seconds...", and
  // beep after that number of seconds has passed
  const numberKeys = {
    "\u0031": 1,
    "\u0032": 2,
    "\u0033": 3,
    "\u0034": 4,
    "\u0035": 5,
    "\u0036": 6,
    "\u0037": 7,
    "\u0038": 8,
    "\u0039": 9
  };

  if (Object.keys(numberKeys).includes(key)) {
    const seconds = numberKeys[key];
    process.stdout.write(`setting timer for ${seconds} seconds...\n`);

    setTimeout(() => {
      process.stdout.write('\x07');
    }, seconds * 1000)
  }
};



