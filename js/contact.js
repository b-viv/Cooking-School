const forms = document.querySelectorAll('.validations');

Array.from(forms).forEach(form => {
  form.addEventListener('submit', event => {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }

    alert("The message has been sent successfully!");
  }, false);
});



