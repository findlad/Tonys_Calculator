function add() {
  console.log("trying to add ");
  const op1 = document.getElementById("op1");
  const op2 = document.getElementById("op2");
  let a = Number(op1.value);
  let b = Number(op2.value);
  let c = a + b;
  let answer = document.getElementById("answerBox");
  answer.value = c;
}
function subtract() {
  console.log("trying to subtract ");
  const op1 = document.getElementById("op1");
  const op2 = document.getElementById("op2");
  let a = Number(op1.value);
  let b = Number(op2.value);
  let c = a - b;
  let answer = document.getElementById("answerBox");
  answer.value = c;
}
