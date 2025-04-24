document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('editProductForm');
  
    // Simulación de datos del producto (deberías obtener esto desde una API en un proyecto real)
    const producto = {
      name: 'Camiseta AUNAR',
      description: 'Camiseta oficial de la universidad.',
      price: 25000,
      stock: 10,
      category: 'Ropa',
    };
  
    // Cargar datos existentes
    document.getElementById('editName').value = producto.name;
    document.getElementById('editDescription').value = producto.description;
    document.getElementById('editPrice').value = producto.price;
    document.getElementById('editStock').value = producto.stock;
    document.getElementById('editCategory').value = producto.category;
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      // Aquí puedes enviar los nuevos datos al backend
      const updatedProduct = {
        name: form.editName.value,
        description: form.editDescription.value,
        price: parseFloat(form.editPrice.value),
        stock: parseInt(form.editStock.value),
        category: form.editCategory.value,
        image: form.editImage.files[0] || null,
      };
  
      console.log('Producto actualizado:', updatedProduct);
      alert('Producto actualizado correctamente.');
    });
  });
  