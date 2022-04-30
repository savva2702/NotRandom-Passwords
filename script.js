let symbols1 = [
  "[",
  "]",
  "}",
  "{",
  "?",
  "/",
  "(",
  ")",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
];
let symbols2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let symbols3 = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let symbols4 = symbols1.concat(symbols2, symbols3);

function randomize() {
  let num = parseInt(document.getElementById("input").value);
  let res = "";

  for (let i = 0; i <= num; i++) {
    res += symbols4[Math.floor(Math.random() * symbols4.length)];
  }
  return res;
}

function generatePass() {
  let password1 = document.getElementById("pass1");
  let password2 = document.getElementById("pass2");
  let password3 = document.getElementById("pass3");
  let password4 = document.getElementById("pass4");

  password1.textContent = randomize();
  password2.textContent = randomize();
  password3.textContent = randomize();
  password4.textContent = randomize();
}

function copyPass(id) {
  let range = document.createRange();
  range.selectNode(document.getElementById(id));
  window.getSelection().removeAllRanges(); // clear current selection
  window.getSelection().addRange(range); // to select text
  document.execCommand("copy");

  // new tippy("pass1", {
  //   content: "Copied",
  //   trigger: "click",
  // });

  window.getSelection().removeAllRanges(); // to deselect
}

new tippy("[data-tippy-content]", {
  trigger: "click",
});
