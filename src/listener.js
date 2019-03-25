import { ArtistSearch } from './searches.js';
const $ = require("jquery");


export class Listener {
  start() {
    this.listenForSearch();
  }

  listenForSearch() {
    $('#search-button').click(function () {
      let artistName = $('#search-input').val();
      new ArtistSearch(artistName).fetch_and_render();
    });
  }
}
