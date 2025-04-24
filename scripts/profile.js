document.addEventListener("DOMContentLoaded", function() {
    // Manejo de subida de imagen de perfil
    document.getElementById("photo-upload").addEventListener("change", function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById("profile-photo").src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    // Manejo del botón "Editar Información"
    document.getElementById("edit-profile-btn").addEventListener("click", function() {
        window.location.href = "edit.html"; // Redirección a la página de edición
    });
});
