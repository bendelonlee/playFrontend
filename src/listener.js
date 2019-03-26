import { ArtistSearch } from './searches.js';
const $ = require("jquery");

var outerestThis = 'foo'

export class Listener {
  start() {
    this.listenForSearch();
  }
  listenForSearch() {
    var outererThis = 'foo';

    const search = () => {
      var outerThis = 'foo';
      let artistName = $('#search-input').val();
      new ArtistSearch(artistName).fetch_and_render().then(function (a, b, x) {
        debugger;
          this.starListener();
      });
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

  starListener() {
    debugger;

  $(".fa-star").click(function (e) {
    debugger;

    $(this).css('font-weight', 'bold')
    // addFavorite($('#current-weather').attr('data'))
  });
  }
}
