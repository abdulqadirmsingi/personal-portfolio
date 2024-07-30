const terminalContent = [
  "$ node",
  "> const developer = {",
  ">   name: 'abdulqadirmsingi',",
  ">   skills: ['HTML', 'CSS3','JavaScript','Vuejs', 'Python', 'Django'],",
  ">   yearsOfExperience: doesn't matter",
  "> }",
  "> console.log(`Hello, I'm ${developer.name}`)",
  "Hello, I'm abdulqadirmsingi",
  ">",
];

let line = 0;
let char = 0;
const terminal = document.getElementById("terminal");

function typeWriter() {
  if (line < terminalContent.length) {
    if (char < terminalContent[line].length) {
      terminal.innerHTML += terminalContent[line].charAt(char);
      char++;
      setTimeout(typeWriter, 25);
    } else {
      terminal.innerHTML += "<br>";
      line++;
      char = 0;
      setTimeout(typeWriter, 50);
    }
  } else {
    terminal.innerHTML += '<span id="cursor">|</span>';
  }
}

window.onload = typeWriter;

document.addEventListener("DOMContentLoaded", (event) => {
  const words = ["nerd", "geek", "coder", "developer", "hacker"];
  let index = 0;
  let wordIndex = 0;
  let currentWord = "";
  let isDeleting = false;

  const typeWriter = () => {
    const word = words[index];

    if (isDeleting) {
      currentWord = word.substring(0, currentWord.length - 1);
    } else {
      currentWord = word.substring(0, currentWord.length + 1);
    }

    document.getElementById("nerd-word").textContent = currentWord;

    let typeSpeed = 200;

    if (isDeleting) {
      typeSpeed /= 2;
    }

    if (!isDeleting && currentWord === word) {
      typeSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && currentWord === "") {
      isDeleting = false;
      index = (index + 1) % words.length;
      typeSpeed = 500;
    }

    setTimeout(typeWriter, typeSpeed);
  };

  typeWriter();
});

