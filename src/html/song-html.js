export const song = (track) => {
  return `
  <ul class="song" id="song-${track.track.track_id}">
    <i class="far fa-star favorite-song" data="${track.track.track_id}"></i>
    <li class="song-name"> Name: ${track.track.track_name}</li>
    <li class="rating"> Rating: ${track.track.track_rating} </li>
  </ul>
  `;
}
