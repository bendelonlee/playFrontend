const $ = require('jQuery');

import { song } from './html/song-html.js'
import { Listener } from './listener.js';


export const artistSearchRenderer = (artist, tracks) => {
  tracks.forEach(function (track) {
    $('#songs').append(song(track))
  });
  Listener.prototype.starListener();
}
