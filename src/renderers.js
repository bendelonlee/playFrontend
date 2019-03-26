const $ = require('jQuery');

import { song } from './html/song-html.js'
import { Listener } from './listener.js';
import { favoriteHtml } from './html/favorites-html.js';


export const artistSearchRenderer = (artist, tracks) => {
  tracks.forEach(function (track) {
    $('#songs').append(song(track))
  });
  Listener.prototype.starListener();
}

export const favoritesRenderer = (favorites) => {
  favorites.forEach(function (favorite) {
    $('#favorites').append(favoriteHtml(favorite))
  });
}
