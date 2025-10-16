document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formulario");
  const nameInput = document.getElementById("name");
  const lastNameInput = document.getElementById("Last_name");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  // validadores
  const regexName = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  
  function getIconEl(input) {
    const cont = input.closest(".inputs");
    return cont ? cont.querySelector("i.warning") : null;
  }
  function getErrorEl(input) {
    const cont = input.closest(".inputs");
    return cont ? cont.nextElementSibling : null;
  }

  function showError(input, message) {
    const icon = getIconEl(input);
    const errorEl = getErrorEl(input);

    input.classList.remove("valid");
    input.classList.add("invalid");

    if (icon) icon.classList.add("show");
    if (errorEl) errorEl.classList.add("show");
    if (errorEl) errorEl.innerHTML = `<em>${message}</em>`;
  }

  function showSuccess(input) {
    const icon = getIconEl(input);
    const errorEl = getErrorEl(input);

    input.classList.remove("invalid");
    input.classList.add("valid");

    if (icon) icon.classList.remove("show");
    if (errorEl) errorEl.classList.remove("show");
  }

  // validaciones individuales
  function validateName() {
    const val = nameInput.value.trim();
    if (val === "") {
      showError(nameInput, "First Name Cannot be empty");
      return false;
    } else if (!regexName.test(val)) {
      showError(nameInput, "First name only can contain letters");
      return false;
    } else {
      showSuccess(nameInput);
      return true;
    }
  }

  function validateLastName() {
    const val = lastNameInput.value.trim();
    if (val === "") {
      showError(lastNameInput, "Last Name Cannot be empty");
      return false;
    } else if (!regexName.test(val)) {
      showError(lastNameInput, "Last name only can contain letters");
      return false;
    } else {
      showSuccess(lastNameInput);
      return true;
    }
  }

  function validateEmail() {
    const val = emailInput.value.trim();
    if (val === "") {
      showError(emailInput, "Email Cannot be empty");
      return false;
    } else if (!regexEmail.test(val)) {
      showError(emailInput, "Looks like this is not an email");
      return false;
    } else {
      showSuccess(emailInput);
      return true;
    }
  }

  function validatePassword() {
    const val = passwordInput.value;
    if (val.trim() === "") {
      showError(passwordInput, "Password Cannot be empty");
      return false;
    } else if (val.length < 6) {
      showError(passwordInput, "Password must be at least 6 characters");
      return false;
    } else {
      showSuccess(passwordInput);
      return true;
    }
  }

  // validación en tiempo real (mientras escriben)
  nameInput.addEventListener("input", validateName);
  lastNameInput.addEventListener("input", validateLastName);
  emailInput.addEventListener("input", validateEmail);
  passwordInput.addEventListener("input", validatePassword);

  // validar al enviar
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const v1 = validateName();
    const v2 = validateLastName();
    const v3 = validateEmail();
    const v4 = validatePassword();

    if (v1 && v2 && v3 && v4) {

      Swal.fire({
        icon: "success",
        title: "Formulario válido",
        text: "¡Gracias! Los datos son correctos."
      });
    } else {
     
      const firstInvalid = form.querySelector("input.invalid");
      if (firstInvalid) firstInvalid.focus();
    }
  });
});



