
$(document).ready(function() {
  $('form#search input[type=submit]').on("click", search);
})

function search() {
 var query = $("#query").val();

debugger
  var url = 'http://ws.spotify.com/search/1/track.json?q=' + query;
  $.ajax({
    url: url,
    method: "get"
  });
    // showResults(what do i put here);
}
  
// function showResults(input) {
//   $("#list").forEach(function(input) {
//     body.append("<li><a href='" + input.href + "'>" + input.name + "</a></li>");
//   })

// }
