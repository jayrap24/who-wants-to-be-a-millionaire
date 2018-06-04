$(document).ready(function() {
  let searchTerm = " ";
  function getData(searchTerm) {
    const query = {
      part: 'snippet',
      key: 'AIzaSyACGyqUv-viv_3q6-j9_xFpJSKAcg_U5zk',
      q: `${searchTerm} in:name`,
      maxResults: '5'
    }
    $.getJSON("https://www.googleapis.com/youtube/v3/search", query, displayData);
  }
  // display function   
  let displayData = function(data) {
    $.each(data.items, function(i, item) {
      let thumbnailUrl = item.snippet.thumbnails.default.url;
      let linkId = item.id.videoId;
      let channel = item.snippet.channelTitle;
      let description = item.snippet.description;
      let title = item.snippet.title
      let test = item;
        console.log(test)
    //display the HTML via javascript
      let vidInfo = `<h2>${title}</h2>
        <a href="https://www.youtube.com/watch?v=${linkId}">
        <img src =${thumbnailUrl} alt='${searchTerm} thumbnail'></a><p>${description}</p>`;
      $("#results").append(vidInfo);
        console.log(item.results)
    });
  };
    
    //submit action for user to search
  $("#search-form").submit(function(event) {
    event.preventDefault();
    let test = $("#search-input").val();
    searchTerm = test;
    getData(searchTerm);
    
  });
  
    
});


  
  
  

