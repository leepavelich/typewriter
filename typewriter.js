const typewriter = (sentence, typeDelay) => {
  let delay = 0;
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, delay);
    delay += typeDelay;
  }
  
  setTimeout(() => {
    console.log();
  }, delay);
};

const exampleSentence = "hello there from lighthouse labs";
typewriter(exampleSentence, 50);