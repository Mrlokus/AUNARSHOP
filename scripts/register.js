function validateAndRegister() {
  const nombres = document.getElementById('nombres').value.trim();
  const apellidos = document.getElementById('apellidos').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;
  const errorMessage = document.getElementById('error-message');

  // Expresión regular mejorada para validar email (acepta mayúsculas)
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!nombres || !apellidos || !email || !password || !confirmPassword) {
    errorMessage.textContent = 'Por favor, completa todos los campos.';
    return;
  }

  if (!emailRegex.test(email)) {
    errorMessage.textContent = 'Correo electrónico no válido.';
    return;
  }

  if (password.length < 6) {
    errorMessage.textContent = 'La contraseña debe tener al menos 6 caracteres.';
    return;
  }

  if (password !== confirmPassword) {
    errorMessage.textContent = 'Las contraseñas no coinciden.';
    return;
  }

  // Registro exitoso
  alert('¡Registro exitoso!');
  redirectToLogin();
}

function redirectToLogin() {
  window.location.href = 'login.html';
}
