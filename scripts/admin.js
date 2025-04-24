// Selecciona los elementos necesarios
const editButtons = document.querySelectorAll('.edit-btn');
const modal = document.getElementById('editModal');
const closeModalButtons = document.querySelectorAll('.cancel-btn');

// Función para abrir el modal
function openModal() {
    modal.classList.remove('hidden');
}

// Función para cerrar el modal
function closeModal() {
    modal.classList.add('hidden');
}

// Agrega eventos a los botones "Editar"
editButtons.forEach(button => {
    button.addEventListener('click', openModal);
});

// Agrega eventos a los botones "Cancelar"
closeModalButtons.forEach(button => {
    button.addEventListener('click', closeModal);
});