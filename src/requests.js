const $ = require("jquery");

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
        renderer(artist, result.message.body.track_list)
      }
    });
  }

  const artistByName = (name, nextRequest) => {
    return $.ajax({url: `https://api.musixmatch.com/ws/1.1/artist.search?format=jsonp&callback=callback&quorum_factor=1&apikey=60c354a43ae452685248b841bfa271e2&q_artist=${name}`,
      data: {
        format: 'jsonp',
        callback: 'jsonp_callback'
      },
      dataType: 'jsonp',
      jsonpCallback: 'jsonp_callback',
      success: function(result){
        let artist = result.message.body.artist_list[0].artist;
        nextRequest(artist);
      }
    });
  }
  artistByName(name, tracksByArtist);
}
