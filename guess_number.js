const readLine = require("readline");
const input = readLine.createInterface(process.stdin);
let randomNumber = Math.floor(Math.random() * 100);
let counter = 1;
console.log(
  "Давай сыграем в игру? Я загадал число от 0 до 100, угадай его, а я буду тебе подсказывать"
);
const checkAnswer = (answer) => {
  return isFinite(answer)
    ? answer
    : console.log(`Ну вообще то '${answer} это не число`);
};
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
