// Lista de productos (esto puede provenir de un servidor o base de datos real)
const productos = [
    { nombre: "Smartphone X", categoria: "Electrónica" },
    { nombre: "Audífonos Pro", categoria: "Electrónica" },
    { nombre: "Cafetera Digital", categoria: "Hogar" },
    { nombre: "Ventilador 3 Velocidades", categoria: "Hogar" },
    // Puedes agregar más productos aquí
  ];
  
  // Referencia a la barra de búsqueda y a las sugerencias
  const inputBusqueda = document.getElementById("busqueda");
  const sugerencias = document.getElementById("sugerencias");
  
  // Evento para detectar cuando el usuario escribe en la barra de búsqueda
  inputBusqueda.addEventListener("input", () => {
    // Obtener el valor escrito en la barra de búsqueda y convertirlo a minúsculas
    const valor = inputBusqueda.value.toLowerCase();
    
    // Limpiar las sugerencias anteriores
    sugerencias.innerHTML = "";
  
    // Si no hay texto en la barra de búsqueda, ocultar las sugerencias
    if (valor.trim() === "") {
      sugerencias.classList.add("hidden");
      return;
    }
  
    // Filtrar los productos que coincidan con el texto ingresado
    const resultados = productos.filter(producto =>
      producto.nombre.toLowerCase().includes(valor)
    );
  
    // Si no hay resultados, mostrar mensaje de "Sin resultados"
    if (resultados.length === 0) {
      sugerencias.innerHTML = "<li>Sin resultados</li>";
    } else {
      // Crear un elemento <li> para cada producto que coincida con la búsqueda
      resultados.forEach(p => {
        const item = document.createElement("li");
        item.textContent = p.nombre;
        // Al hacer clic en un producto, puedes realizar una acción como redirigir o mostrar más detalles
        item.addEventListener("click", () => {
          inputBusqueda.value = p.nombre; // Coloca el nombre del producto en el input
          sugerencias.classList.add("hidden"); // Oculta las sugerencias
          // Aquí podrías redirigir o filtrar los productos en la pantalla, si lo deseas
          alert("Seleccionaste el producto: " + p.nombre);
        });
        sugerencias.appendChild(item);
      });
    }
  
    // Mostrar las sugerencias
    sugerencias.classList.remove("hidden");
  });
  