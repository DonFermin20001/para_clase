
    // Relación de teclas con usuarios
    const usuarios = {
      'a': 'Ana',
      't': 'Tomás',
      'm': 'María',
      '7': 'Luis',
      '3': 'Sofía',
      '4': 'Carlos',
      'p': 'Patricia',
      'o': 'Oliver',
      'f': 'Fermín',
      's': 'Sonia',
      'c': 'Checho',
      'd': 'Daniel'
    };

    let teclaPresionada = false;
    let primerUsuario = '';

    window.addEventListener('keydown', function(event) {
      const tecla = event.key.toLowerCase();

      if (usuarios.hasOwnProperty(tecla) && !teclaPresionada) {
        teclaPresionada = true;
        primerUsuario = usuarios[tecla];

        document.getElementById('username').value = primerUsuario;
        document.getElementById('resultado').textContent =
          `El usuario "${primerUsuario}" ha presionado la tecla "${tecla.toUpperCase()}"`;

      } else if (usuarios.hasOwnProperty(tecla) && teclaPresionada) {
        const segundoUsuario = usuarios[tecla];
        const mensaje = `El primer usuario seleccionado fue "${primerUsuario}".<br>
                         El segundo intento fue "${segundoUsuario}".<br>
                         <strong>Solo la primera elección es válida.</strong><br>
                         Por favor, recarga la página para intentarlo de nuevo.`;
        document.getElementById('mensajeFinal').innerHTML = mensaje;
      }
    });
