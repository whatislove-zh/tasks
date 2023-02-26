//для запуску в консолі прописати "node app.js"
const fizzBuzz = () => {
  for (let i = 1; i <= 50; i++) {
    console.log((i % 3 === 0 ? "Fizz" : "") + (i % 5 === 0 ? "Buzz" : "") || i);
  }
};

fizzBuzz();
