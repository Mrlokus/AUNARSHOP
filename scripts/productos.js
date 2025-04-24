document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('productForm');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const formData = new FormData(form);
  
      const product = {
        name: formData.get('name'),
        description: formData.get('description'),
        price: parseFloat(formData.get('price')),
        stock: parseInt(formData.get('stock')),
        category: formData.get('category'),
        image: formData.get('image').name
      };
  
      console.log('Producto registrado:', product);
      alert('Producto guardado correctamente.');
  
      form.reset(); // Limpia el formulario
    });
  });
  