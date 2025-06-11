const apiKey = '4mvig64p9otiILGzfh3HSqwNnjqi27ZT';
        const buscarForm = document.getElementById('buscarForm');
        const buscarInput = document.getElementById('buscarInput');
        const resultsContainer = document.getElementById('results');

        buscarForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const query = buscarInput.value;
            const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=9`;

            try {
                const response = await fetch(url);
                const data = await response.json();
                const gifs = data.data;

                resultsContainer.innerHTML = '';

                gifs.forEach(gif => {
                    const img = document.createElement('img');
                    img.src = gif.images.original.url;
                    img.alt = 'Gif result';
                    resultsContainer.appendChild(img);
                });
            } catch (error) {
                console.error('Error al encontrar GIFs:', error);
            }
        });