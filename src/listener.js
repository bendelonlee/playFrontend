import { ArtistSearch } from './searches.js';
const $ = require("jquery");


export class Listener {
  start() {
    this.listenForSearch();
  }

  listenForSearch() {
    const search = () => {
      let artistName = $('#search-input').val();
      new ArtistSearch(artistName).fetch_and_render();
    }
    $('#search-button').click(function () {
      search();
    });
    $('#search-input').keyup(function (key) {
    if (key.which == 13) {
      search();
    }
  });
  }
}
