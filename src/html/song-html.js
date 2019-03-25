export const song = (track) => {

  return `
  <ul class="song" id="song-${track.id}">
    <li class="song-name"> Name: ${track.track.track_name}</li>
    <li class="rating"> Rating: ${track.track.track_rating} </li>
  </ul>
  `;
}
