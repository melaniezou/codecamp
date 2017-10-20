$(document).ready(function(){
  $.getJSON("https://api.airtable.com/v0/appyGyoiBU4EmVWrs/musics?api_key=keyiRhRgiwNQccoN1", function(data) { //récupérer l'API qui permet de lier une BDD sur le site plutôt que d'ajouter chaque chanson manuellement

          counter = 1;
          $.each(data.records, function(key,val){ //répéter l'action sur toute la liste
          val.fields.title //l'élément du tableau à partir duquel se dresse la liste
          code = "<li><span class='title-musique'>#"+counter+".  "+val.fields.title+"</span>\
                  <iframe src='https://open.spotify.com/embed?uri="+val.fields['spotify-link']+"&view=coverart' frameborder='0' allowtransparency='true'></iframe>\
                  <div class='rating'><!--\
                       --><a href='#5' title='Donner 5 étoiles'>☆</a><!--\
                       --><a href='#4' title='Donner 4 étoiles'>☆</a><!--\
                       --><a href='#3' title='Donner 3 étoiles'>☆</a><!--\
                       --><a href='#2' title='Donner 2 étoiles'>☆</a><!--\
                       --><a href='#1' title='Donner 1 étoile'>☆</a>\
                     </div></li>";
          $("#musiques").append(code);

          counter = counter + 1;

        });//relie chaque chanson à son player Spotify
        $
        $( "#search" ).on("click", function() { //activer le bouton de la barre de recherche au clic
          $("#musiques").html(''); //n'afficher que les titres qui seront référencés par un #précis depuis la BDD
          $.each(data.records, function(key,val){ //réitérer l'action sur toute la liste des titres
            if (val.fields.hashtags == $('#barre').val()){
              code = "<li><span class='title-musique'>"+val.fields.title+"</span>\
                      <iframe src='https://open.spotify.com/embed?uri="+val.fields['spotify-link']+"&view=coverart' frameborder='0' allowtransparency='true'></iframe>\
                      <div class='rating'><!--\
                           --><a href='#5' title='Donner 5 étoiles'>☆</a><!--\
                           --><a href='#4' title='Donner 4 étoiles'>☆</a><!--\
                           --><a href='#3' title='Donner 3 étoiles'>☆</a><!--\
                           --><a href='#2' title='Donner 2 étoiles'>☆</a><!--\
                           --><a href='#1' title='Donner 1 étoile'>☆</a>\
                         </div></li>";
              $("#musiques").append(code);

            }
          });



        });


      });
});
