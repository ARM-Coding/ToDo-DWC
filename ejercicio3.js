// Tu código aquí abajo:
async function obtenerPostPorUsuario(userId) {
  try{

    const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts');

    if (!respuesta.ok) {
        throw new Error('Error al conectar con la API de Typicode.');
    };

    const posts = await respuesta.json();

    const postsDelUsuario = posts.filter(post => post.userId === userId);
    postsDelUsuario.forEach(post => console.log(post.title));

  } catch (error) {
    console.error("Ha ocurrido un error en esta operación");
  };
};

// Ejecución de prueba:
obtenerPostPorUsuario(2);