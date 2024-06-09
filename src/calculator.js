document.addEventListener("DOMContentLoaded", function() {
  const clearButton = document.querySelector('.clear');
  const buttons = document.querySelectorAll('.grid-buttons input[type="button"]');
  const resultInput = document.querySelector('.result');

  clearButton.addEventListener('click', function() {
    resultInput.value = '';
  });

  buttons.forEach(button => {
    button.addEventListener('click', function() {
      resultInput.value += this.value;
    });
  });
});
