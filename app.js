const searchSong = () => {
    const searchText = document.getElementById('searchText').value;
    const url = `https://api.lyrics.ovh/suggest/${searchText}`
    
    fetch(url)
    .then(res => res.json())
    .then(data => displaySong(data.data));
}

const displaySong = songs => {
    const songContainer = document.getElementById('song-container');
    songContainer.innerHTML = ''
    songs.forEach(song => {
        const songsDiv = document.createElement('div');
        songsDiv.className = 'single-result row align-items-center my-3 p-3';
        songsDiv.innerHTML = `
                     <div class="col-md-9">
                        <h3 class="lyrics-name">${song.title}</h3>
                        <p class="author lead">Album by <span>${song.artist.name}</span></p>
                        <audio controls>
                            <source src="${song.preview}" type="audio/ogg">
                        </audio>
                    </div>
                    <div class="col-md-3 text-md-right text-center">
                        <button onclick="getLyric('${song.artist.name}', '${song.title}')" class="btn btn-success">Get Lyrics</button>
                    </div>`;
        songContainer.appendChild(songsDiv);
    });
}

const getLyric = (name, line) => {
    const url = `https://api.lyrics.ovh/v1/${name}/${line}`
    fetch(url)
    .then(res => res.json())
    .then(data =>displayLyric(data.lyrics))
}
const displayLyric = (lyric) =>{
    const lyricDiv = document.getElementById('song-lyric');
    lyricDiv.innerText = lyric;
}