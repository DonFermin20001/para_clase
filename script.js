// Mostrar usuarios registrados en el <select>
function cargarUsuariosEnSelect() {
  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  const select = document.getElementById('selectUsuario');
  // Limpiar opciones previas
  select.innerHTML = '<option value="">Seleccione usuario</option>';
  usuarios.forEach(u => {
    select.innerHTML += `<option value="${u.tecla}">${u.nombre} (${u.tecla})</option>`;
  });
}

// Guardar usuario nuevo en localStorage
function guardarUsuario(nombre, tecla) {
  let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  usuarios.push({ nombre, tecla: tecla.toUpperCase() });
  localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

// Manejar registro de usuario
document.getElementById('registroForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const nombre = document.getElementById('nuevoUsuario').value.trim();
  const tecla = document.getElementById('teclaUsuario').value.trim().toUpperCase();
  if (nombre && tecla.match(/^[A-Z0-9]$/)) {
    guardarUsuario(nombre, tecla);
    cargarUsuariosEnSelect();
    alert('Usuario registrado correctamente');
    document.getElementById('nuevoUsuario').value = '';
    document.getElementById('teclaUsuario').value = '';
  } else {
    alert('Ingrese un nombre y una tecla válida (letra o número).');
  }
});

// HTML para el registro de usuarios
// Mostrar usuarios registrados en un select// y permitir registrar nuevos usuarios


// Mostrar nombre del usuario seleccionado
document.addEventListener('DOMContentLoaded', function() {
  cargarUsuariosEnSelect();
  document.getElementById('selectUsuario').addEventListener('change', function() {
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const teclaSeleccionada = this.value;
    const usuario = usuarios.find(u => u.tecla === teclaSeleccionada);
    document.getElementById('username').value = usuario ? usuario.nombre : '';
    document.getElementById('resultado').textContent = usuario ? `Usuario seleccionado: ${usuario.nombre}` : 'ESCOJA NOMBRE';
  });
});

// Cambia la lógica para usar los usuarios registrados
let juegoActivo = true;

window.addEventListener('keydown', function(event) {
  if (!juegoActivo) return;
  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  const select = document.getElementById('selectUsuario');
  const teclaSeleccionada = select.value;
  if (!teclaSeleccionada) return; // No hay usuario seleccionado

  const usuario = usuarios.find(u => u.tecla === teclaSeleccionada);
  const tecla = event.key.toUpperCase();

  if (usuario && tecla === usuario.tecla) {
    document.getElementById('resultado').textContent =
      `¡${usuario.nombre} ha presionado su tecla "${tecla}" correctamente!`;
    juegoActivo = false;
  } else if (usuario && tecla !== usuario.tecla) {
    document.getElementById('mensajeFinal').innerHTML =
      `Tecla incorrecta para ${usuario.nombre}. Intenta de nuevo.`;
  }
});



