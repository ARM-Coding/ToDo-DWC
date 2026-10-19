// Tu código aquí abajo:
async function buscarPostPorId(postId) {

    const contenedor = document.getElementById("resultado-busqueda");

    try {

        const respuesta = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);

        if (!respuesta.ok) {
            throw new Error('Post no encontrado');
        }

        const post = await respuesta.json();

        contenedor.innerHTML = `
            <h2>${post.title.toUpperCase()}</h2>
            <p>${post.body}</p>
        `;

    } catch (error) {
        contenedor.innerHTML = '<p>No se ha podido recuperar el post solicitado</p>';
    };

}

// Ejecución de prueba
buscarPostPorId(88);