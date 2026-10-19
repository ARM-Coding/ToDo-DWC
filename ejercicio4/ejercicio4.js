const usuariosLocales = [
  { id: 1, nombre: 'Ana Gómez', email: 'ana@ies.es' },
  { id: 2, nombre: 'Luis Martínez', email: 'luis@ies.es' }
];

// Tu código aquí abajo:


const contenedor = document.getElementById('contenedor-usuarios');


usuariosLocales.forEach(usuario => {

  const tarjeta = document.createElement('div');
  tarjeta.classList.add('card-usuario');

  const nombreUsuario = document.createElement('h3');
  nombreUsuario.textContent = usuario.nombre;

  const emailUsuario = document.createElement('p');
  emailUsuario.textContent = usuario.email;

  tarjeta.appendChild(nombreUsuario);
  tarjeta.appendChild(emailUsuario);
  
  contenedor.appendChild(tarjeta);
});