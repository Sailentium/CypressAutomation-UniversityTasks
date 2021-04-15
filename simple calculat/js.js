btn.addEventListener("click", f_out);

function f_out() {
  result.innerHTML =
    Number(first.value) +
    Number(second.value) -
    Number(third.value) -
    Number(fourth.value);
}
