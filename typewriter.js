const sentence = "You can't type this fast... No Way, No How. Look no mistakes.\n";
let delay = 0;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
  delay += 50;
}