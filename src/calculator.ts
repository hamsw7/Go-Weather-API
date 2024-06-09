document.addEventListener("DOMContentLoaded", () => {
  const clearButton: HTMLInputElement | null = document.querySelector('.clear');
  const buttons: NodeListOf<HTMLInputElement> | null = document.querySelectorAll('.grid-buttons input[type="button"]');
  const resultInput: HTMLInputElement | null = document.querySelector('.result');

  if (clearButton && resultInput && buttons) {
    clearButton.addEventListener('click', () => {
      if (resultInput) resultInput.value = '';
    });

    buttons.forEach(button => {
      button.addEventListener('click', function() {
        if (resultInput) resultInput.value += this.value;
      });
    });
  }
});
