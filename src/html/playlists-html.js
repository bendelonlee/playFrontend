export const playlistHtml = (playlist) => {
  return `<ul>
    <li class="title"> ${playlist.title} </li>
    <ul hidden class="playlist-songs">
      
    </ul>
  </ul>`
}
