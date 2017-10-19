$(document).ready(function(){
  $.getJSON("https://api.airtable.com/v0/appyGyoiBU4EmVWrs/musics?api_key=keyiRhRgiwNQccoN1", function(data) { //récupérer l'API qui permet de lier une BDD sur le site plutôt que d'ajouter chaque chanson manuellement
          $.each(data.records, function(key,val){ //répéter l'action sur toute la liste
          val.fields.title //l'élément du tableau à partir duquel se dresse la liste
          $('<li>'+val.fields.title+'</li>').appendTo('#musiques');//chaque titre est reliée à une chanson
          $("<iframe src='https://open.spotify.com/embed?uri="+val.fields['spotify-link']+"&view=coverart' frameborder='0' allowtransparency='true'></iframe>").appendTo('#musiques');
        });//relie chaque chanson à son player Spotify
        $( "#search" ).on("click", function() { //activer le bouton de la barre de recherche au clic
          $("#musiques").html(''); //n'afficher que les titres qui seront référencés par un #précis depuis la BDD
          $.each(data.records, function(key,val){ //réitérer l'action sur toute la liste des titres
            if (val.fields.hashtags == $('#barre').val()){
              $('<li>'+val.fields.title+'</li>').appendTo('#musiques');
              $("<iframe src='https://open.spotify.com/embed?uri="+val.fields['spotify-link']+"&view=coverart' frameborder='0' allowtransparency='true'></iframe>").appendTo('#musiques');
            }
          });


        });


      });
});
