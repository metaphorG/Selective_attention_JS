let total_q = 30;
let score = 0;
let sub_btn = document.getElementById("submit");
function QAO() {
  let que = [];
  let ans = 0;
  let opts = [];
  let max_no = 50;
  let qao = [];

  var total_odd_array = [11, 12, 13, 14, 15, 16];
  var total_odd =
    total_odd_array[Math.floor(Math.random() * total_odd_array.length)];

  let odd = [1, 3, 5, 7, 9, 1, 1, 1, 3, 3, 3, 5, 3, 3, 3, 1, 1, 1, 3];
  let even = [0, 2, 4, 6, 8];

  for (let i = 0; i < max_no - total_odd; i++) {
    var even_no = even[Math.floor(Math.random() * even.length)];
    que.push(even_no);
  }

  for (let i = 0; i < total_odd; i++) {
    var odd_no = odd[Math.floor(Math.random() * odd.length)];
    que.push(odd_no);
    ans = ans + odd_no;
  }

  opts.push(ans);
  let opts1 = randSumSub(ans, 1);
  let opts2 = randSumSub(ans, 3);
  let opts3 = randSumSub(ans, 5);
  let opts4 = randSumSub(ans, 7);
  opts.push(opts1);
  opts.push(opts2);
  opts.push(opts3);
  opts.push(opts4);
  opts.sort(() => Math.random() - 0.5);
  que.sort(() => Math.random() - 0.5);

  for (let i = 0; i < que.length; i++) {
    qao.push(que[i]);
  }
  for (let i = 0; i < opts.length; i++) {
    qao.push(opts[i]);
  }
  qao.push(ans);
  return qao;
}

function randSumSub(a, b) {
  if (Math.random() <= 0.5) {
    result = a - b;
  } else {
    result = a + b;
  }
  return result;
}

function start_test() {
  main_test_display = document.getElementById("main");
  main_test_display.style.display = "inline";
  start_btn = document.getElementById("start");
  start_btn.style.display = "none";
  setTimeout(submit_test, 480000);
  start_timer();
}

function start_timer() {
  var minute = 7;
  var sec = 60;
  var timer_event = setInterval(function () {
    document.getElementById("timer").innerHTML = minute + " : " + sec;
    sec--;
    if (sec == 00) {
      minute--;
      sec = 60;
    }
    if (minute == 1 && sec == 30) {
      document.getElementById("timer").style.color = "red";
    }
    if (minute == -1 && sec == 60) {
      clearInterval(timer_event);
      console.log("triggered");
      document.getElementById("timer").innerHTML = "00:00";
    }
    if (sub_btn.style.display == "none") {
      clearInterval(timer_event);
    }
  }, 1000);
}

for (let i = 1; i < total_q + 1; i++) {
  let quest = QAO();
  let qao_temp = quest.slice(0, 50);
  let qao_opts = quest.slice(50, 55);
  let answer = quest[55];

  let question = document.createElement("div");
  let question_no = document.createElement("p");
  let que_whole = document.createElement("p");
  let options1 = document.createElement("p");
  let options2 = document.createElement("p");
  let options3 = document.createElement("p");
  let options4 = document.createElement("p");
  let options5 = document.createElement("p");
  let answer_div = document.createElement("p");
  let hr = document.createElement("hr");
  question.setAttribute("id", "que" + i);
  question.setAttribute("class", "que");
  question_no.textContent = i + ". ";
  question_no.setAttribute("class", "question_no");
  que_whole.setAttribute("class", "question_main");
  que_whole.textContent = qao_temp.join(" ");
  answer_div.setAttribute("class", "answer");
  answer_div.textContent = answer;
  options1.textContent = "A. " + qao_opts[0];
  options1.setAttribute("class", "option option1");
  options2.textContent = "B. " + qao_opts[1];
  options2.setAttribute("class", "option option2");
  options3.textContent = "C. " + qao_opts[2];
  options3.setAttribute("class", "option option3");
  options4.textContent = "D. " + qao_opts[3];
  options4.setAttribute("class", "option option4");
  options5.textContent = "E. " + qao_opts[4];
  options5.setAttribute("class", "option option5");
  question.appendChild(question_no);
  question.appendChild(que_whole);
  question.appendChild(answer_div);
  question.appendChild(options1);
  question.appendChild(options2);
  question.appendChild(options3);
  question.appendChild(options4);
  question.appendChild(options5);
  main.appendChild(question);
  main.appendChild(hr);
}

let option = document.getElementsByClassName("option");
let answer_check = document.getElementsByClassName("answer");
let score_div = document.getElementById("score");

for (i = 0; i < option.length; i++) {
  option[i].setAttribute("id", i);
  option[i].addEventListener("click", the_func);
}
function the_func() {
  let id_current = parseInt(this.id);

  if (id_current % 5 == 0) {
    option[id_current].classList.remove(
      "marked",
      "answer_wrong",
      "answer_right"
    );
    option[id_current + 1].classList.remove(
      "marked",
      "answer_wrong",
      "answer_right"
    );
    option[id_current + 2].classList.remove(
      "marked",
      "answer_wrong",
      "answer_right"
    );
    option[id_current + 3].classList.remove(
      "marked",
      "answer_wrong",
      "answer_right"
    );
    option[id_current + 4].classList.remove(
      "marked",
      "answer_wrong",
      "answer_right"
    );
    option[id_current].classList.add("marked");
  }
  if (id_current % 5 == 1) {
    option[id_current].classList.remove(
      "marked",
      "answer_wrong",
      "answer_right"
    );
    option[id_current + 1].classList.remove(
      "marked",
      "answer_wrong",
      "answer_right"
    );
    option[id_current + 2].classList.remove(
      "marked",
      "answer_wrong",
      "answer_right"
    );
    option[id_current + 3].classList.remove(
      "marked",
      "answer_wrong",
      "answer_right"
    );
    option[id_current - 1].classList.remove(
      "marked",
      "answer_wrong",
      "answer_right"
    );
    option[id_current].classList.add("marked");
  }
  if (id_current % 5 == 2) {
    option[id_current].classList.remove(
      "marked",
      "answer_wrong",
      "answer_right"
    );
    option[id_current + 1].classList.remove(
      "marked",
      "answer_wrong",
      "answer_right"
    );
    option[id_current + 2].classList.remove(
      "marked",
      "answer_wrong",
      "answer_right"
    );
    option[id_current - 1].classList.remove(
      "marked",
      "answer_wrong",
      "answer_right"
    );
    option[id_current - 2].classList.remove(
      "marked",
      "answer_wrong",
      "answer_right"
    );
    option[id_current].classList.add("marked");
  }
  if (id_current % 5 == 3) {
    option[id_current].classList.remove(
      "marked",
      "answer_wrong",
      "answer_right"
    );
    option[id_current + 1].classList.remove(
      "marked",
      "answer_wrong",
      "answer_right"
    );
    option[id_current - 1].classList.remove(
      "marked",
      "answer_wrong",
      "answer_right"
    );
    option[id_current - 2].classList.remove(
      "marked",
      "answer_wrong",
      "answer_right"
    );
    option[id_current - 3].classList.remove(
      "marked",
      "answer_wrong",
      "answer_right"
    );
    option[id_current].classList.add("marked");
  }
  if (id_current % 5 == 4) {
    option[id_current].classList.remove(
      "marked",
      "answer_wrong",
      "answer_right"
    );
    option[id_current - 1].classList.remove(
      "marked",
      "answer_wrong",
      "answer_right"
    );
    option[id_current - 2].classList.remove(
      "marked",
      "answer_wrong",
      "answer_right"
    );
    option[id_current - 3].classList.remove(
      "marked",
      "answer_wrong",
      "answer_right"
    );
    option[id_current - 4].classList.remove(
      "marked",
      "answer_wrong",
      "answer_right"
    );
    option[id_current].classList.add("marked");
  }
  if (
    parseInt(option[id_current].textContent.slice(2)) ==
    answer_check[parseInt(id_current / 5)].textContent
  ) {
    option[id_current].classList.add("answer_right");
    score++;
  } else {
    option[id_current].classList.add("answer_wrong");
  }
}
function submit_test() {
  for (i = 0; i < option.length; i++) {
    option[i].removeEventListener("click", the_func);
  }
  for (i = 0; i < option.length; i++) {
    let c = i / 5;
    if (i % 5 == 0) {
      if (option[i].classList.contains("answer_right")) {
        continue;
      }
      if (option[i + 1].classList.contains("answer_right")) {
        continue;
      }
      if (option[i + 2].classList.contains("answer_right")) {
        continue;
      }
      if (option[i + 3].classList.contains("answer_right")) {
        continue;
      }
      if (option[i + 4].classList.contains("answer_right")) {
        continue;
      } else {
        if (
          parseInt(option[i].textContent.slice(2)) ==
          answer_check[parseInt(c)].textContent
        ) {
          option[i].classList.add("answer_right_submit");
          continue;
        }
        if (
          parseInt(option[i + 1].textContent.slice(2)) ==
          answer_check[parseInt(c)].textContent
        ) {
          option[i + 1].classList.add("answer_right_submit");
          continue;
        }
        if (
          parseInt(option[i + 2].textContent.slice(2)) ==
          answer_check[parseInt(c)].textContent
        ) {
          option[i + 2].classList.add("answer_right_submit");
          continue;
        }
        if (
          parseInt(option[i + 3].textContent.slice(2)) ==
          answer_check[parseInt(c)].textContent
        ) {
          option[i + 3].classList.add("answer_right_submit");
          continue;
        } else {
          option[i + 4].classList.add("answer_right_submit");
        }
      }
    }
  }
  var ans_right = document.getElementsByClassName("answer_right");
  for (i = 0; i < ans_right.length; i++) {
    ans_right[i].style.backgroundColor = "green";
    ans_right[i].style.color = "#333";
  }
  var ans_wrong = document.getElementsByClassName("answer_wrong");
  for (i = 0; i < ans_wrong.length; i++) {
    ans_wrong[i].style.backgroundColor = "red";
    ans_wrong[i].style.color = "#333";
  }
  score_div.textContent = score + " / " + total_q;

  sub_btn.style.display = "none";
  let score_text = document.getElementById("score_text");
  score_text.style.display = "inline";
  document.getElementById("timer").style.display = "none";
}
