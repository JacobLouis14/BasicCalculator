function display(num) {
  resultScreen.value += num;
}
function clearDisplay() {
  resultScreen.value = "";
}
function clearOne() {
  resultScreen.value = resultScreen.value.slice(0, -1);
}

function equal() {
  try {
    resultScreen.value = eval(resultScreen.value);
  } catch (error) {
    resultScreen.value = "Error";
    setTimeout(() => {
      resultScreen.value = "";
    }, 1000);
  }
}
