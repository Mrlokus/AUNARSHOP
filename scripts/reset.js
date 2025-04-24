document.addEventListener("DOMContentLoaded", () => {
    const sendCodeBtn = document.getElementById("sendCodeBtn");
    const goToLoginLink = document.getElementById("goToLogin");
    const resetMessage = document.getElementById("reset-message");
  
    sendCodeBtn.addEventListener("click", () => {
      const email = document.getElementById("reset-email").value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      if (email === "") {
        resetMessage.textContent = "Por favor ingresa tu correo.";
        resetMessage.style.color = "red";
        return;
      }
  
      if (!emailRegex.test(email)) {
        resetMessage.textContent = "Correo no válido.";
        resetMessage.style.color = "red";
        return;
      }
  
      // Simulación de envío exitoso
      resetMessage.textContent = "Código enviado correctamente al correo.";
      resetMessage.style.color = "green";
    });
  
    // Redirige a login.html cuando se hace clic en el enlace
    goToLoginLink.addEventListener("click", (e) => {
      e.preventDefault(); // Evita comportamiento por defecto
      window.location.href = "login.html";
    });
  });
  