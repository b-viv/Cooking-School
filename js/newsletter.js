const newsletterDiv = document.querySelector('.newsletter');
const subForm = document.querySelector('.sub-form');
const emailInput = document.querySelector('.emailInput');
const forms = document.querySelectorAll('.needs-validation');

Array.from(forms).forEach(form => {
  form.addEventListener('submit', event => {
    event.preventDefault();

    if (!form.checkValidity()) {
      event.stopPropagation();
    } else {
      let emailInputValue = emailInput.value;
      subForm.classList.add('hide');

      newsletterDiv.innerHTML = `
        <p>Thank you for subscribing!</p>
        <p>A confirmation email has been sent to <span class="text-secondary">${emailInputValue}</span></p>`;
    }
  }, false);
});



