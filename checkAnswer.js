export default (answer) => {
  return isFinite(answer)
    ? answer
    : console.log(`Ну вообще то '${answer} это не число`);
};
