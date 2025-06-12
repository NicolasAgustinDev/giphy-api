const claveApi = '4mvig64p9otiILGzfh3HSqwNnjqi27ZT';
const formularioBusqueda = document.getElementById('searchForm');
const entradaBusqueda = document.getElementById('searchInput');
const contenedorResultados = document.getElementById('results');

formularioBusqueda.addEventListener('submit', async (evento) => {
    evento.preventDefault();
    const consulta = entradaBusqueda.value;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${claveApi}&q=${consulta}&limit=9`;

    try {
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        const gifs = datos.data;

        contenedorResultados.innerHTML = '';

        gifs.forEach(gif => {
            const imagen = document.createElement('img');
            imagen.src = gif.images.original.url;
            imagen.alt = 'Resultado de Gif';
            contenedorResultados.appendChild(imagen);
        });
    } catch (error) {
        console.error('Error al obtener los GIFs:', error);
    }

    // Limpiar el campo de entrada y enfocar nuevamente
    entradaBusqueda.value = '';
    entradaBusqueda.focus();

    // Mostrar un mensaje si no se encontraron resultados
    if (gifs.length === 0) {
        const mensaje = document.createElement('p');
        mensaje.textContent = 'No se encontraron resultados.';
        contenedorResultados.appendChild(mensaje);
    }
    
});