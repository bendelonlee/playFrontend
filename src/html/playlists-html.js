export const playlistHtml = (playlist) => {
  return `<ul id="playlist-${playlist.id}">
    <li class="title"> ${playlist.title} </li>
    <ol hidden class="playlist-songs">

    </ol>
  </ul>`
}
