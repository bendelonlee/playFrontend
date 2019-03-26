export const favoriteHtml = (favorite) => {
  return `<ul>
    <li class="title"> ${favorite.name} </li>
    <li class="artist-name"> Artist: ${favorite.artist_name} </li>
    <li class="rating"> Rating: ${favorite.rating} </li>
  </ul>`
}
