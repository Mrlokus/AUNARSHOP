document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formPago");
    const mensajePago = document.getElementById("mensajePago");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const numero = document.getElementById("numero").value.trim();
      const fecha = document.getElementById("fecha").value.trim();
      const cvv = document.getElementById("cvv").value.trim();
  
      if (!validarNumeroTarjeta(numero)) {
        mostrarMensaje("Número de tarjeta inválido", true);
        return;
      }
  
      if (!validarFecha(fecha)) {
        mostrarMensaje("Fecha de expiración incorrecta", true);
        return;
      }
  
      if (!/^\d{3,4}$/.test(cvv)) {
        mostrarMensaje("CVV inválido", true);
        return;
      }
  
      mostrarMensaje("Pago procesado exitosamente ✅", false);
  
      // Aquí iría la integración con la pasarela de pagos real
      form.reset();
    });
  
    function validarNumeroTarjeta(numero) {
      const limpio = numero.replace(/\s+/g, '');
      return /^\d{16}$/.test(limpio); // 16 dígitos
    }
  
    function validarFecha(fecha) {
      const regex = /^(0[1-9]|1[0-2])\/\d{2}$/;
      return regex.test(fecha);
    }
  
    function mostrarMensaje(msg, esError) {
      mensajePago.textContent = msg;
      mensajePago.style.color = esError ? "red" : "green";
    }
  });
  