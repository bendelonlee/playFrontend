const $ = require('jQuery');

import { song } from './html/song-html.js'
import { Listener } from './listener.js';
import { favoriteHtml } from './html/favorites-html.js';
import { playlistHtml } from './html/playlists-html.js';


export const artistSearchRenderer = (artist, tracks) => {
  $('#songs').empty();
  $('#songs').append(`<h2>Search Results for <span id="current-artist">${artist.artist_name}</span></h2>`);

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
  $('#playlists').empty();
  $('#playlist-select').empty();
  $('#playlists').append('<h2>Playlists</h2>');

  playlsts.forEach((playlist) => {
    $('#playlists').append(playlistHtml(playlist));
    $('#playlist-select').append(`<option value="${playlist.id}">${playlist.title}</option>`);
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
