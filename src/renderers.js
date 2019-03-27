const $ = require('jQuery');

import { song } from './html/song-html.js'
import { Listener } from './listener.js';
import { favoriteHtml } from './html/favorites-html.js';
import { playlistHtml } from './html/playlists-html.js';


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
  Listener.prototype.addToPlaylistListener();
}

export const playlistsRenderer = (playlsts) => {
  playlsts.forEach((playlist) => {

    $('#playlists').append(playlistHtml(playlist))
    playlist.favorites.forEach( (favorite) => {
      $(`#playlist-${playlist.id}`).find('.playlist-songs').append(
        `
        <li>${favorite.name}</li>
        `
      )
    });
  });
  Listener.prototype.playlistTitleListener();
}
