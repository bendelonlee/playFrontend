export const playlistHtml = (playlist) => {
  return `<ul id="playlist-${playlist.id}">
    <li class="playlist-title" id="playlist-title-${playlist.id}"> ${playlist.title} </li>
    <ol hidden class="playlist-songs">

    </ol>
  </ul>`
}
