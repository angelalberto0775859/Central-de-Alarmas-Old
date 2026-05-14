 // Mostrar el nombre del archivo seleccionado y mensaje de archivo cargado
 document.getElementById('archivo').addEventListener('change', function() {
     var nombre = this.files[0].name;
     document.getElementById('archivo-nombre').textContent = nombre;
     document.getElementById('archivo-cargado').style.display = 'inline'; // Mostrar mensaje de archivo cargado
 });