let total_q = 30;
let score = 0;
let sub_btn = document.getElementById("submit");

function isMobileDevice() {
  var check = false;
  (function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
}

if (isMobileDevice()) {
  document.getElementById("all_other").style.display = "none";
} else {
  document.getElementById("use_comp").style.display = "none";
}

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

  while (opts.length < 6) {
    let rand_1_to_9 = parseInt(Math.random() * 10);
    let option_generated = randSumSub(ans, rand_1_to_9);
    if (opts.includes(option_generated)) {
      continue;
    } else {
      opts.push(option_generated);
    }
  }

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
  document.documentElement.requestFullscreen();
}

function start_timer() {
  var minute = 7;
  var sec = 60;
  var timer_event = setInterval(function () {
    document.getElementById("timer").innerHTML =
      minute.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      }) +
      ":" +
      sec.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
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
  option[i].addEventListener("click", mark_or_unmark_selected);
}
function mark_or_unmark_selected() {
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
    option[i].removeEventListener("click", mark_or_unmark_selected);
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
