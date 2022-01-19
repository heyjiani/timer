const input = process.argv.slice(2);

const timer = (times) => {
  for (let entry of times) {
    if (Number(entry) > 0 && !isNaN(entry)) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, entry * 1000);
    }
  }
};

timer(input);