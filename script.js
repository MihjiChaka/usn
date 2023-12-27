function compareNumbers() {
  const number1 = document.getElementById('number1').value.replace(/\s/g, '');
  const number2 = document.getElementById('number2').value.replace(/\s/g, '');

  if (number1 === number2) {
    document.getElementById('result').innerText = 'Numbers match!';
  } else {
    document.getElementById('result').innerText = 'Numbers do not match.';
  }
}
