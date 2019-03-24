const $ = require("jquery");

export const artistSearch = (id) => {

  $.ajax({url: "https://api.musixmatch.com/ws/1.1/track.search?format=jsonp&callback=callback&quorum_factor=1&apikey=60c354a43ae452685248b841bfa271e2&f_artist_id=118",
    data: {
      format: 'jsonp',
      callback: 'jsonp_callback'
    },
    dataType: 'jsonp',
    jsonpCallback: 'jsonp_callback',
    success: function(result){
      debugger;
      $("body").html(result);
    }
  });
}
