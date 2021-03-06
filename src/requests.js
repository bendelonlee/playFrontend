const $ = require("jquery");
const backendAddress = 'https://play-backend.herokuapp.com'
import { favoritesRenderer, playlistsRenderer } from './renderers'

export const getFavorites = () => {
  fetch(`${backendAddress}/api/v1/favorites`).then( (result) =>
    result.json()
  ).then( (myJson) => {
    favoritesRenderer(myJson)
  });
}

export const getPlaylists = () => {
  fetch(`${backendAddress}/api/v1/playlists`).then( (result) =>
    result.json()
  ).then( (myJson) => {
    playlistsRenderer(myJson)
  });
}


export const addFavoriteToPlaylist = (playlistId, favoriteId) => {
  fetch(`${backendAddress}/api/v1/playlists/${playlistId}/favorites/${favoriteId}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });
}

export const artistSearchRequest = (name, renderer) => {
  const tracksByArtist = (artist) => {
    let id = artist.artist_id;
    $.ajax({
      url: `https://api.musixmatch.com/ws/1.1/track.search?format=jsonp&callback=callback&quorum_factor=1&apikey=60c354a43ae452685248b841bfa271e2&f_artist_id=${id}`,
      data: {
        format: 'jsonp',
        callback: 'jsonp_callback'
      },
      dataType: 'jsonp',
      jsonpCallback: 'jsonp_callback',
      success: function(result){
        renderer(artist, result.message.body.track_list);
      }
    });
  }


  const artistByName = (name, nextRequest) => {
    $.ajax({url: `https://api.musixmatch.com/ws/1.1/artist.search?format=jsonp&callback=callback&quorum_factor=1&apikey=60c354a43ae452685248b841bfa271e2&q_artist=${name}`,
      data: {
        format: 'jsonp',
        callback: 'jsonp_callback'
      },
      dataType: 'jsonp',
      jsonpCallback: 'jsonp_callback',
      success: (result) => {
        let artist = result.message.body.artist_list[0].artist;
        nextRequest(artist);
      }
    });
  }
  artistByName(name, tracksByArtist);
}

export const addFavorite = (songOnDom) => {
  let song = {
    name: songOnDom.find('.song-name').html().split(': ')[1],
    genre: '',
    artist_name: $('#current-artist').html(),
    rating: songOnDom.find('.rating').html().split(': ')[1]
  }

  fetch(`${backendAddress}/api/v1/favorites`, {
    method: 'POST',
    body: JSON.stringify(song),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });
}
