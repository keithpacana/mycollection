$(document).ready(function(){
 	$(".title").click(function() {
 		location.href = "index.html";
 	})
  var rest = true;

  $('#stick').click(function() {
      if (rest === false) {
        $('#stick').css("transform","skewX(27deg)");
        $('#stick').css("left","35%");
        rest = true;
        $('#disc').css("animation","none");
        $('#cover').css("animation","none");
    }
    else {
        $('#stick').css("transform","skewX(0deg)");
        $('#stick').css("left","25%");
        rest = false;
        $('#disc').css("animation","spin 2s linear infinite");
        $('#cover').css("animation","spin 2s linear infinite");
    }

  });
  $('#play').click(function () {
        $('#stick').css("transform","skewX(0deg)");
        $('#stick').css("left","25%");
        rest = false;
        $('#disc').css("animation","spin 2s linear infinite");
        $('#cover').css("animation","spin 2s linear infinite");
  });
    $('#pause').click(function () {
        $('#stick').css("transform","skewX(27deg)");
        $('#stick').css("left","35%");
        rest = true;
        $('#disc').css("animation","none");
        $('#cover').css("animation","none");
  });


 	$('img[alt="clash"]').click(function() {
 		var src = $('img[alt="clash"]').attr('src');
 		document.getElementById("cover").src= src;
    $("#subtitle,.albums,#record").fadeOut();
    var image = '<img class="album-large" src = "' 
    + src + '"/>';
    var info = "<div id='album-info'>London Calling<br> <div id='artist'>The Clash (1979)</div> </div>";
    var all = "<div class='description'>" + image +info+
    "</div> <div id='artist-info'>" +
    '<p>Some of my personal favorites from this album are: <li>"Brand New Cadillac"</li>  <li>"Jimmy Jazz"</li> <li>"Spanish Bombs"</li> <li>"Lost in the Supermarket"</li> <li> "The Guns or Brixton"</li> <li>"Lovers Rock"</li> <li>"Train in Vain"</li></p></div>';
    $(all).appendTo('.test');
    $(".test,#back-button,#play,#pause").fadeIn();
 	});
  	$('img[alt="cure"]').click(function() {
 		var src = $('img[alt="cure"]').attr('src');
 		document.getElementById("cover").src= src;
    $("#subtitle,.albums,#record,#album-info,description,artist-info").fadeOut();
    var image = '<img class="album-large" src = "' 
    + src + '"/>';
    var info = "<div id='album-info'>Seventeen Seconds<br> <div id='artist'>The Cure (1980)</div> </div>";
    var all = "<div class='description'>" + image +info+
    "</div> <div id='artist-info'>" +
    '<p>This is one of my favorite Cure album. I listen to it mostly in the fall since it consists of mostly dark/haunting instrumental synth sounds perfect for Halloween or just cold weather. Robert Smith\'s\ voice is hauntingly perfect. Some of my personal favorites from this album are: <li>"A Reflection"</li>  <li>"Play for Today"</li> <li>"Secrets"</li> <li>"M"</li> <li> "Three"</li> <li>"A Forest"</li> </p></div>';
    $(all).appendTo('.test');
    $(".test,#back-button,#play,#pause").fadeIn();
 	});
   	$('img[alt="rs"]').click(function() {
 		var src = $('img[alt="rs"]').attr('src');
 		document.getElementById("cover").src= src;
    $("#subtitle,.albums,#record,#album-info,description,artist-info").fadeOut();
    var image = '<img class="album-large" src = "' 
    + src + '"/>';
    var info = "<div id='album-info'>Between the Buttons<br> <div id='artist'>The Rolling Stones (1967)</div></div>";
    var all = "<div class='description'>" + image +info+
    '</div> <div id="artist-info"> <p>A feel good album full of joyful and carefree songs such as "Let\'s spend the night together", "Connection", and "Cool, Calm, and Collected". My favorite song is "She smiled Sweetly", which begins with the organ playing and continues to play in the background; it reminds me of organs playing in an old cathedral.</p></div>';
    $(all).appendTo('.test');
    $(".test,#back-button,#play,#pause").fadeIn();
 	});
   	$('img[alt="goo"]').click(function() {
 		var src = $('img[alt="goo"]').attr('src');
 		document.getElementById("cover").src= src;
    $("#subtitle,.albums,#record,#album-info,description,artist-info").fadeOut();
    var image = '<img class="album-large" src = "' 
    + src + '"/>';
    var info = "<div id='album-info'>Goo<br> <div id='artist'>Sonic Youth (1990)</div> </div>";
    var all = "<div class='description'>" + image +info+
    "</div> <div id='artist-info'>" +
    '<p>One of my favorite Sonic Youth albums. I like the blend of punk rock and garage rock. Somedays you just wanna listen to loud and turbulent sounds and this is definitely the album for that. It\'s great in that it\'s contained to some extent. Some of my favorite songs include "Dirty Boots", "Tunic (A song for Karen)", "Disappear", and "Goo". "Tunic (A song for Karen)" is such a haunting song. Kim Gordon does a great job in addressing Karen Carpenters battle with anorexia. Everytime I hear, "I feel like I\'m disappearing, getting smaller every day But I look in the mirror, I\'m bigger in every way" sends chills down my spine. I really enjoy the guitar riffs in songs such as "Kool Thing" and "Dirty Boots".</p></div>';
    $(all).appendTo('.test');
    $(".test,#back-button,#play,#pause").fadeIn();
 	});

   	$('img[alt="doors"]').click(function() {
 		var src = $('img[alt="doors"]').attr('src');
 		document.getElementById("cover").src= src;
    $("#subtitle,.albums,#record,#album-info,description,artist-info").fadeOut();
    var image = '<img class="album-large" src = "' 
    + src + '"/>';
    var info = "<div id='album-info'>The Doors<br> <div id='artist'>The Doors (1967)</div> </div>";
    var all = "<div class='description'>" + image +info+
    "</div> <div id='artist-info'>" +
    "<p>My favorite psychedelic rock album. I first listened to this album senior year of high school everyday I'd walk to school and have this on. I didn\'nt understand this album well before, but now it\'s making more sense. I really enjoy listening to \"Soul Kitchen\", \"The Crystal Ship\", and \"Light my fire\". This is actually one of the few albums that I can listen to the whole thing with no skips. Other songs such as \"End of the night\" is haunting it reminds me of long summer nights in a road to nowhere.This is definitely a perfect summer album. </p></div>";
    $(all).appendTo('.test');
    $(".test,#back-button,#play,#pause").fadeIn();
 	});
   	$('img[alt="velvet"]').click(function() {
 		var src = $('img[alt="velvet"]').attr('src');
 		document.getElementById("cover").src= src;
    $("#subtitle,.albums,#record,#album-info,description,artist-info").fadeOut();
    var image = '<img class="album-large" src = "' 
    + src + '"/>';
    var info = "<div id='album-info'>The Velvet Underground & Nico<br> <div id='artist'>The Velvet Underground (1967)</div></div>";
    var all = "<div class='description'>" + image +info+
    "</div> <div id='artist-info'>" +
    "<p>This was the album that introduced me to The Velvet Underground. The first song I heard was \"Femme Fatale\" and I fell in love with Nico's voice. I was shocked she wasn't actually part of the Velvets and that she was asked to join per Andy Warhol's request. Honorable mention to Moe Tucker on the drums. My favorite songs on this album are coincidentally the ones that Nico is singing on which are \"Femme Fatale\" and \"I'll be your mirror\". Her voice is so soothing. One of the notable songs in my opinion is \"Venus in furs\", when I first listened to it I didn't understand it and the lyrics definitely screamed BDSM, but I wasn't sure until it was later confirmed by my google search. It really is an interesting and unique sound. </p></div>";
    $(all).appendTo('.test');
    $(".test,#back-button,#play,#pause").fadeIn();
 	});

   	$('img[alt="th"]').click(function() {
 		var src = $('img[alt="th"]').attr('src');
 		document.getElementById("cover").src= src;
    $("#subtitle,.albums,#record,#album-info,description,artist-info").fadeOut();
    var image = '<img class="album-large" src = "' 
    + src + '"/>';
    var info = "<div id='album-info'>Remain in the Light<br> <div id='artist'>Talking Heads (1980)</div> </div>";
    var all = "<div class='description'>" + image +info+
    "</div> <div id='artist-info'>" +
    "<p>I'm a government man! \"Born under punches\" is such an upbeat song; it's the perfect start of the album. The fast-paced sounds matched with David Byrne's anxious tone are perfect together. I really enjoy David Byrne's monologues especially in songs such as \"Houses in Motion.\"</p></div>";
    $(all).appendTo('.test');
    $(".test,#back-button,#play,#pause").fadeIn();
 	});
   	$('img[alt="pixies"]').click(function() {
 		var src = $('img[alt="pixies"]').attr('src');
 		document.getElementById("cover").src= src;
    $("#subtitle,.albums,#record,#album-info,description,artist-info").fadeOut();
    var image = '<img class="album-large" src = "' 
    + src + '"/>';
    var info = "<div id='album-info'>Doolittle<br> <div id='artist'>Pixies (1989)</div></div>";
    var all = "<div class='description'>" + image +info+
    "</div> <div id='artist-info'>" +
    "<p>Some of my favorite songs include:"
    +"<li>Wave of Mutilation</li>"
    +"<li>Monkey gone to Heaven</li>"
    +"<li>Hey</li>"
    +"<li>Gouge Away</li>"
    +"</p></div>";
    $(all).appendTo('.test');
    $(".test,#back-button,#play,#pause").fadeIn();
 	});
   	$('img[alt="soma"]').click(function() {
 		var src = $('img[alt="soma"]').attr('src');
 		document.getElementById("cover").src= src;
    $("#subtitle,.albums,#record,#album-info,description,artist-info").fadeOut();
    var image = '<img class="album-large" src = "' 
    + src + '"/>';
    var info = "<div id='album-info'>Siamese Dream<br> <div id='artist'>The Smashing Pumpkins (1993)</div></div>";
    var all = "<div class='description'>" + image +info+
    "</div> <div id='artist-info'>" +
    "<p>One of my favorite rock albums from the 90s. Many of the songs definitely have that 90s grunge rock style. My favorite song from the album is definitely \"Soma\" it's a beautiful song. I like how it starts off slow and soft and then progressively gets louder and there's a sense of longing in Billy Corgan's voice as the song progresses. I also enjoy the guitar solo in the middle and how the song transitions from loud to soft to the point where voices slowly drift away as the song ends. Other favorite songs of mine are \"Hummer\", \"Cherub Rock\",and \"Geek U.S.A\" </p></div>";
    $(all).appendTo('.test');
    $(".test,#back-button,#play,#pause").fadeIn();
 	});
   	$('img[alt="ramones"]').click(function() {
 		var src = $('img[alt="ramones"]').attr('src');
 		document.getElementById("cover").src= src;
    $("#subtitle,.albums,#record,#album-info,description,artist-info").fadeOut();
    var image = '<img class="album-large" src = "' 
    + src + '"/>';
    var info = "<div id='album-info'>Rocket to Russia<br> <div id='artist'>Ramones (1977)</div></div>";
    var all = "<div class='description'>" + image +info+
    "</div> <div id='artist-info'>" +
    "<p>Fun and classic punk rock album. The carefree vibe is apparent in the songs such \"Creptin Hop\", \"I don't care\", and \"Teenage Lobotomy\". It's an album that you can just bop your head aggressively too while dancing around carefree. My personal favorite is \"Rockaway Beach\"; a great summer song and it makes me wanna visit Rockaway Beach just because. </p></div>";
    $(all).appendTo('.test');
    $(".test,#back-button,#play,#pause").fadeIn();
 	});
    $('img[alt="ween"]').click(function() {
        var src = $('img[alt="ween"]').attr('src');
        document.getElementById("cover").src= src;
    $("#subtitle,.albums,#record,#album-info,description,artist-info").fadeOut();
    var image = '<img class="album-large" src = "' 
    + src + '"/>';
    var info = "<div id='album-info'>Chocolate & Cheese<br> <div id='artist'>Ween (1994)</div> </div>";
    var all = "<div class='description'>" + image +info+
    "</div> <div id='artist-info'>" +
    "<p>The cover speaks for itself. Gene and Dean Ween don't care. They're carefree and are not really serious, which shows in their odd song titles such as \"Spinal Meningitis (Got Me Down)\", \"Baby Bitch\", \"Mr. Would you Please Help My Pony\", and \"The HIV Song\"."+
    "Don't let the goofy/odd song titles fool you though. Chocolate & Cheese is full of greatly produced songs. \"Freedom of '76\" is one of the smoothest songs I've heard. \"A Tear for Eddie\" makes me feel like I'm on a resort on an island. \"Baby Bitch\" and \"Drifter in the Dark\" are both playful"+
    "yet melancholy in a way. This is definitely one my favorite albums and one of the few that I listen to with no skips.</p></div>";
    $(all).appendTo('.test');
    $(".test,#back-button,#play,#pause").fadeIn();
    });

});