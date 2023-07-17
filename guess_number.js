import readLine from "readline";
import checkAnswer from "./checkAnswer.js";
import { initText } from "./data.js";
const input = readLine.createInterface(process.stdin);
let randomNumber = Math.floor(Math.random() * 100);
console.log(initText);

let counter = 1;

input.on("line", (answer) => {
  checkAnswer(answer);
  if (answer > randomNumber) {
    console.log("Я загадал число меньше");
    counter = counter + 1;
  }
  if (answer < randomNumber) {
    console.log("Я загадал число больше");
    counter = counter + 1;
  }
  if (answer == randomNumber) {
    console.log(
      `Ого ты угадал число, тебе потребовалось всего ${counter} попыток, потрясающе`
    );
    input.close();
  }
});
