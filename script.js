const form = document.getElementById('search-form');
const API_KEY = 'Tu-Api-Key';

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const query = document.getElementById('query').value;
    const language = document.getElementById('lenguage').value;

    const url = `https://api.opensubtitles.com/api/v1/subtitles?query=${query}&languages=${language}`

    const response = await fetch(url, {
        headers:{
            'Api-Key': API_KEY,
            'Accept': 'application/json',
        }
    });

    const data = await response.json()
    console.log(data);
    show_results(data)
});


function show_results(data){
    const results = document.getElementById('results');
    results.innerHTML='';

    data.data.forEach(item => {
        const div = document.createElement('div');
        div.className = 'result-card';
        div.innerHTML = `
            <div class="result-info">
                <h3>${item.attributes.feature_details.title} (${item.attributes.feature_details.year})</h3>
                <span>${item.attributes.language} - ${item.attributes.download_count} descargas</span>
            </div>
            <button class="download-btn" data-field="${item.attributes.files[0].file_id}">Descargar</button>
        `;
        results.appendChild(div)
    })
}


document.getElementById('results').addEventListener('click', async (event) => {
    if(event.target.classList.contains('download-btn')){
        const field = event.target.dataset.field;

        const response = await fetch('https://api.opensubtitles.com/api/v1/download',{
            method: 'POST',
            headers:{
            'Api-Key': API_KEY,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            },
            body: JSON.stringify({file_id:field})
        });
        const data = await response.json();
        console.log(data)
        
        const fileResponse = await fetch(data.link);
        const blob = await fileResponse.blob();

        const url=window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = data.file_name || 'subtitulo.srt';
        a.click()

        window.URL.revokeObjectURL(url)
    }
})