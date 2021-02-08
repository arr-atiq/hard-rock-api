const searchSong = () => {
    const searchText = document.getElementById('searchText').value;
    const url = `https://api.lyrics.ovh/suggest/:${searchText}`
    
    fetch(url)
    .then(res => res.json())
    .then(data => displaySong(data.data));
}

const displaySong = songs => {
    songs.forEach(song => console.log(song.title))
}