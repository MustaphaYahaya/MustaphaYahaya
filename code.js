// Selecciona el formulario
const form = document.querySelector('.formulario');

// Selecciona los campos de entrada del formulario
const firstNameInput = form.querySelector('input[placeholder="First Name"]');
const lastNameInput = form.querySelector('input[placeholder="Last Name"]');
const emailInput = form.querySelector('input[placeholder="Email Address"]');
const passwordInput = form.querySelector('input[placeholder="Password"]');

// Función para mostrar errores
function showError(input) {
  const inputContainer = input.closest('.inputContainer');
  const icon = inputContainer.querySelector('.error-icon');
  const message = inputContainer.querySelector('.error-message');

  icon.style.display = 'block';
  message.style.display = 'block';
  input.style.borderColor = 'var(--Red)';
}

// Función para ocultar errores
function hideError(input) {
  const inputContainer = input.closest('.inputContainer');
  const icon = inputContainer.querySelector('.error-icon');
  const message = inputContainer.querySelector('.error-message');

  icon.style.display = 'none';
  message.style.display = 'none';
  input.style.borderColor = 'var(--Dark-Blue)';
}

// Validación del formulario
function validateForm(event) {
  let isValid = true;

  // Validar el nombre
  if (firstNameInput.value.trim() === '') {
    showError(firstNameInput);
    isValid = false;
  } else {
    hideError(firstNameInput);
  }

  // Validar el apellido
  if (lastNameInput.value.trim() === '') {
    showError(lastNameInput);
    isValid = false;
  } else {
    hideError(lastNameInput);
  }

  // Validar el correo electrónico
  if (emailInput.value.trim() === '') {
    showError(emailInput);
    isValid = false;
  } else {
    hideError(emailInput);
  }

  // Validar la contraseña
  if (passwordInput.value.trim() === '') {
    showError(passwordInput);
    isValid = false;
  } else {
    hideError(passwordInput);
  }

  // Si el formulario no es válido, previene el envío
  if (!isValid) {
    event.preventDefault();
  }
}


// Agregar un evento de escucha al formulario para la validación
form.addEventListener('submit', validateForm);