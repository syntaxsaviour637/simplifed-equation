
var quiz = document.querySelector(".sum h1");
var btn = document.querySelector(".button");
var ans = document.querySelector("input");
var score = 0;

function createSum() {
  for (var i = 0; i < 2; i++) {
    var num = Math.floor(Math.random() * 201)-100;
    if(num>0){
    num = '+'+num
    }
    quiz.innerHTML += num;
    ans.value = ""
  }
}

btn.addEventListener("click", () => {
  if (eval(quiz.textContent) == ans.value) {
    result = "correct";
    score++;
  } else {
    result = "wrong";
    if (score > 0) {
      score--;
    }
  }
  document.querySelector(".box h1").innerText = score;
  document.querySelector("#result").innerText = result;

  document.querySelector("#result").style.display = "block";
  document.querySelector(".sum").style.display = "none";
  document.querySelector(".button").style.display = "none";

  setTimeout(() => {

    quiz.innerText = ""
    createSum()

    document.querySelector("#result").style.display = "none";
    document.querySelector(".sum").style.display = "flex";
    document.querySelector(".button").style.display = "block";

  }, 750);
});