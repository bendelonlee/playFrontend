import { ArtistSearch } from './searches.js';
import { addFavorite, addFavoriteToPlaylist, getPlaylists } from './requests.js';
const $ = require("jquery");

export class Listener {
  start() {
    this.listenForSearch();
  }
  listenForSearch() {

    const search = () => {
      let artistName = $('#search-input').val();
      new ArtistSearch(artistName).fetch_and_render()
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
    $(".fa-star").click(function (e) {
      $(this).css('font-weight', 'bold');
      addFavorite($(this).parent());
    });
  }

  playlistTitleListener() {
    $(".playlist-title").click( function (e) {
      this.parentElement.children[1].removeAttribute('hidden');
    });
  }

  addToPlaylistListener() {
    $(".add-to-playlist-button").click( function (e) {
      let favoriteId = this.getAttribute('data');
      let playlistId = $('#playlist-select').val();
      addFavoriteToPlaylist(playlistId, favoriteId)
      setTimeout(function functionName() {
        getPlaylists();
      }, 500);
    });
  }

}
