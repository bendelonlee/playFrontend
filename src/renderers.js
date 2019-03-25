const $ = require('jQuery');

import { song } from './html/song-html.js'

export const artistSearchRenderer = (artist, tracks) => {
  tracks.forEach(function (track) {
    $('#songs').append(song(track))

  });
}
