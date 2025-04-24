// Función de ejemplo para login
function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  alert("Inicio de sesión exitoso (simulado).");
}

// Redirigir a registro
document.getElementById("registerBtn").addEventListener("click", () => {
  window.location.href = "register.html";
});

// Redirigir a recuperación
document.getElementById("forgotPassword").addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "reset.html";
});
