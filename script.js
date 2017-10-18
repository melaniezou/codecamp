$(document).ready(function(){
  $.getJSON("https://api.airtable.com/v0/appyGyoiBU4EmVWrs/musics?api_key=keyiRhRgiwNQccoN1",
  					function(data) {
          console.log(data);
          $.each(data.records, function(key,val){
          console.log(val.fields.title);

          $('<li>'+val.fields.title+'</li>').appendTo('#musiques');
});
});
});
