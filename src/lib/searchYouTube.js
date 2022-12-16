import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {
  $.ajax({
    url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos?q=' + query,
    type: 'GET',

    contentType: 'application/json; charset=utf-8',
    success: callback,
    error: function() { console.log('failed to do search'); }
  });
  //console.log(JSON.stringify(query));
  //console.log(query);
};

export default searchYouTube;
