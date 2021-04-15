let question_arr = [
  "1.Как выглядел первый баг в истории?",
  "2. Какой принцип написания кода для языка Джава?",
  "3. Какому языку соотвествует данное сленговое название - 'Сижка'?",
  "4. Как принято называть Windows XP?",
  "5. Какого типа данных нет в программировании?",
  "6.Вам нужно полностью закончить цикл прямо сейчас, какое служебное слово будем использовать?",
  "7. Какая модель программирования сейчас самая популярная?",
  "8. Кто самый первый программист?",
];
let a1_arr = [
  "Он был жуком",
  "Не писать код",
  "Python",
  "Степаша",
  "bool",
  "continue",
  "структурное программирование",
  "Адам Тьюринг",
];
let a2_arr = [
  "Мотылек",
  "Сделай дело - гуляй смело",
  "Java",
  "Хрюша",
  "async",
  "break",
  "функциональное программирование",
  "Ада Лавлэйс",
];
let a3_arr = [
  "Ошибка в программе",
  "Написал один раз, запускай везде",
  "C",
  "Каркуша",
  "integer",
  "and",
  "ООП модель",
  "Чарльз Беббидж",
];
let answer_arr = [
  "Мотылек",
  "Написал один раз, запускай везде",
  "С",
  "Хрюша",
  "async",
  "break",
  "ООП модель",
  "Ада Лавлэйс",
];

let n_right_answer_arr = [2, 3, 3, 2, 2, 2, 3, 2];
let n_answer = 7;
let right_answers = 0;

answers(n_question.value);
btn.addEventListener("click", f_out);
btn1.addEventListener("click", f_out1);
btn2.addEventListener("click", f_out2);

function f_out() {
  console.log(y1.checked);
  console.log(y2.checked);
  console.log(y3.checked);
  if (y1.checked) {
    n_a = 1;
  }
  if (y2.checked) {
    n_a = 2;
  }
  if (y3.checked) {
    n_a = 3;
  }
  console.log(n_a);
  if (n_a == n_right_answer) {
    right_answers += 1;
    answer.classList.add("hidden");
    right_div.classList.remove("hidden");
    wrong_div.classList.add("hidden");
    console.log("n_question.value = " + n_question.value);
    console.log("n_answer = " + n_answer);
    console.log("right_answ = " + right_answers);
    if (n_question.value == n_answer) {
      btn.classList.add("hidden");
      btn2.classList.add("hidden");
      let el1 = document.createElement("p");
      el1.innerHTML = "<b>" + right_answers + "</b>";
      right_div.appendChild(el1);
      alert("На этом вопросы закончены.");
      resa.classList.remove("hidden");
    }
  } else {
    right_answers -= 1;
    right_div.classList.add("hidden");
    wrong_div.classList.remove("hidden");
  }

  if (right_answers < 0) {
    right_answers = -1;
  }
  if (right_answers > 8) {
    right_answers = 8;
  }

  if (n_question.value == 0) {
    desc.classList.add("hidden");
    im.classList.add("hidden");
  }
  if (right_answers - n_question.value >= 2) {
    right_answers -= 1;
    console.log("try_count_answ= " + right_answers);
  }
}

function f_out1() {
  answer.classList.toggle("hidden");
  btn1.classList.toggle("opend");
}

function f_out2() {
  right_div.classList.add("hidden");
  k = Number(n_question.value);
  k += 1;
  answers(k);
}

function answers(k) {
  n_question.value = k;
  question.innerHTML = question_arr[n_question.value];
  a1.innerHTML = a1_arr[n_question.value];
  a2.innerHTML = a2_arr[n_question.value];
  a3.innerHTML = a3_arr[n_question.value];
  answer.innerHTML = answer_arr[n_question.value];
  n_right_answer = n_right_answer_arr[n_question.value];
}
