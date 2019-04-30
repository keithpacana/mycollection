$(document).ready(function(){
 	$(".title").click(function() {
 		location.href = "index.html";
 	});
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
 	$('img[alt="chet"]').click(function() {
 		var src = $('img[alt="chet"]').attr('src');
 		document.getElementById("cover").src= src;
    $("#subtitle,.albums,#record,#album-info,description,artist-info").fadeOut();
    var image = '<img class="album-large" src = "' 
    + src + '"/>';
    var info = "<div id='album-info'>Chet Baker Sings<br> <div id='artist'>Chet Baker (1954)</div> </div>";
    var all = "<div class='description'>" + image +info+
    "</div> <div id='artist-info'>" +
        "<p>Is Chet Baker a singer or a trumphet player? Simple answer: he's both. He's proved he can do both in this album and many others. I like Chet's rendition of \"My Funny Valentine\" , \"I fall in love Too Easily\", \"It's always you\", his tone is a mix of nostalgia and melancholy. </p></div>";
    $(all).appendTo('.test');

    $(".test,#back-button,#play,#pause").fadeIn();
 	});
  	$('img[alt="getz"]').click(function() {
  		 // document.getElementById("record").style.opacity= "0.5";
 		var src = $('img[alt="getz"]').attr('src');
 		document.getElementById("cover").src= src;
    $("#subtitle,.albums,#record,#album-info,description,artist-info").fadeOut();
    var image = '<img class="album-large" src = "' 
    + src + '"/>';
    var info = "<div id='album-info'>Getz/Gilberto<br> <div id='artist'>João Gilberto and Stan Getz (1964)</div> </div>";
    var all = "<div class='description'>" + image +info+
    "</div> <div id='artist-info'>" +
    "<p>The birth of Brazillian Jazz. Is it? That I'm not sure, however I'm sure that this is one of the most relaxing albums to listen to. Although others may hail it as Elevator music, that can't overshadow the impact of Getz and Gilberto in the world of jazz. However, it really is great music to study to. Who needs essential oils to relax when you have songs like \"Girl from Impanema\", \"Para Machuchar Meu Coracao\", and \"Desafinado\" that will put you at ease.</p></div>";
    $(all).appendTo('.test');
    $(".test,#back-button,#play,#pause").fadeIn();
 	});

   	$('img[alt="jim"]').click(function() {
 		var src = $('img[alt="jim"]').attr('src');
 		document.getElementById("cover").src= src;
    $("#subtitle,.albums,#record,#album-info,description,artist-info").fadeOut();
    var image = '<img class="album-large" src = "' 
    + src + '"/>';
    var info = "<div id='album-info'>Undercurrent<br> <div id='artist'>Jim Hall and Bill Evans (1964)</div> </div>";
    var all = "<div class='description'>" + image +info+
    "</div> <div id='artist-info'>" +
    "<p>Bill Evans on the piano and Jim Hall on guitar, that's all you need to make a masterpiece I guess. The interplay between Hall on the guitar and Evans on the piano is so perfectly orchestrated. The rendition of \"My funny Valentine\" is very unique and innovative, I would never have thought of that song played in this way, but Hall and Evans are musical geniuses. Their minds!"+
    "My personal favorites are \"Dream Gypsy\", \"Skating in Central Park\", and \"Darn that Dream\", these songs really are a good way to relax and also perfect for a romantic date out!</p></div>";
    $(all).appendTo('.test');
    $(".test,#back-button,#play,#pause").fadeIn();
 	});

   	$('img[alt="louis"]').click(function() {
 		var src = $('img[alt="louis"]').attr('src');
 		document.getElementById("cover").src= src;
    $("#subtitle,.albums,#record,#album-info,description,artist-info").fadeOut();
    var image = '<img class="album-large" src = "' 
    + src + '"/>';
    var info = "<div id='album-info'>Ella and Louis<br> <div id='artist'>Ella Fitzgerald and Louis Armstrong (1956)</div> </div>";
    var all = "<div class='description'>" + image +info+
    "</div> <div id='artist-info'>" +
    "<p> Ella and Louis, the king and queen of jazz. Whether you agree with that statement or not,it's safe to say that Ella and Louis are definitely a top-notch jazz duo. Although they have distinct voices, Ella and Louis's voices compliment one another well. My personal favorites are \"They can't take that away from me\", \"Stars fell on Alabama\", and \"Cheek to Cheek\". </p></div>";
    $(all).appendTo('.test');
    $(".test,#back-button,#play,#pause").fadeIn();
 	});
   	$('img[alt="charlie"]').click(function() {
 		var src = $('img[alt="charlie"]').attr('src');
 		document.getElementById("cover").src= src;
    $("#subtitle,.albums,#record,#album-info,description,artist-info").fadeOut();
    var image = '<img class="album-large" src = "' 
    + src + '"/>';
    var info = "<div id='album-info'>A Charlie Brown Christmas<br> <div id='artist'>Vince Guaraldi Trio (1965)</div> </div>";
    var all = "<div class='description'>" + image +info+
    "</div> <div id='artist-info'>" +
    "<p>A classic Christmas movie with a classic soundtrack. You can never go with Vince Guaraldi Trio. This album definitely has a nostalgic/child-like vibe, which is seen in songs like \"Linus and Lucy\", \"My Little Drum\", and \"Tannenbaum\". Yet it's contrasted with melancholy like songs such as \"Christmas Time is Here\" and \"Fur Elise\".</p></div>";
    $(all).appendTo('.test');
    $(".test,#back-button,#play,#pause").fadeIn();
 	});
   	$('img[alt="miles"]').click(function() {
 		var src = $('img[alt="miles"]').attr('src');
 		document.getElementById("cover").src= src;
    $("#subtitle,.albums,#record,#album-info,description,artist-info").fadeOut();
    var image = '<img class="album-large" src = "' 
    + src + '"/>';
    var info = "<div id='album-info'>Kind of Blue<br> <div id='artist'>Miles Davis (1959)</div> </div>";
    var all = "<div class='description'>" + image +info+
    "</div> <div id='artist-info'>" +
    "<p> I was first properly introduced to Miles Davis' music in a history of jazz class I took here at Cal during the summer of my sophomore year. \"Kind of Blue\" was one of the albums we listened to and I fell in love with it. It's melancholic, which is heard in \"Blue in Green\" and cool, which is heard in \"So What\" and \"Freddie Freeloader\". Davis balances well between the two.</p></div>";
    $(all).appendTo('.test');
    $(".test,#back-button,#play,#pause").fadeIn();
 	});
   	$('img[alt="sin"]').click(function() {
 		var src = $('img[alt="sin"]').attr('src');
 		document.getElementById("cover").src= src;
    $("#subtitle,.albums,#record,#album-info,description,artist-info").fadeOut();
    var image = '<img class="album-large" src = "' 
    + src + '"/>';
    var info = "<div id='album-info'>Ultimate Sinatra<br> <div id='artist'>Frank Sinatra (2015)</div> </div>";
    var all = "<div class='description'>" + image +info+
    "</div> <div id='artist-info'>" +
    "<p>A compilation of Frank Sinatra's greatest songs, Ultimate Sinatra is a mix of cool, melancholic, and romantic. The first few songs are reminiscent of an older era, but Ultimate Sinatra still delivers some of his more well known hits such as \"Come Fly with me\" , \"Theme from New York, New York\", and \"Fly me to the Moon\"</p></div>";
    $(all).appendTo('.test');
    $(".test,#back-button,#play,#pause").fadeIn();
 	});
   	$('img[alt="vince"]').click(function() {
 		var src = $('img[alt="vince"]').attr('src');
 		document.getElementById("cover").src= src;
    $("#subtitle,.albums,#record,#album-info,description,artist-info").fadeOut();
    var image = '<img class="album-large" src = "' 
    + src + '"/>';
    var info = "<div id='album-info'>Greatest Hits<br> <div id='artist'>Vince Guaraldi (1989)</div> </div>";
    var all = "<div class='description'>" + image +info+
    "</div> <div id='artist-info'>" +
    "<p>Another great album/compilation of songs from Vince Guaraldi. My personal favorites are \"Days of Wine and Roses\" and \"Manha Da Carnaval\".</p></div>";
    $(all).appendTo('.test');
    $(".test,#back-button,#play,#pause").fadeIn();
 	});
   	$('img[alt="carp"]').click(function() {
 		var src = $('img[alt="carp"]').attr('src');
 		document.getElementById("cover").src= src;
    $("#subtitle,.albums,#record,#album-info,description,artist-info").fadeOut();
    var image = '<img class="album-large" src = "' 
    + src + '"/>';
    var info = "<div id='album-info'>Bad Girls<br> <div id='artist'>Donna Summer (1979)</div> </div>";
    var all = "<div class='description'>" + image +info+
    "</div> <div id='artist-info'>" +
    "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></div>";
    $(all).appendTo('.test');
    $(".test,#back-button,#play,#pause").fadeIn();
 	});
   	$('img[alt="stevie"]').click(function() {
 		var src = $('img[alt="stevie"]').attr('src');
 		document.getElementById("cover").src= src;
    $("#subtitle,.albums,#record,#album-info,description,artist-info").fadeOut();
    var image = '<img class="album-large" src = "' 
    + src + '"/>';
    var info = "<div id='album-info'>Bad Girls<br> <div id='artist'>Donna Summer (1979)</div> </div>";
    var all = "<div class='description'>" + image +info+
    "</div> <div id='artist-info'>" +
    "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></div>";
    $(all).appendTo('.test');
    $(".test,#back-button,#play,#pause").fadeIn();
 	});



//   dragElement(document.getElementById("stick"));

// function dragElement(elmnt) {
//   var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
//   if (document.getElementById(elmnt.id + "header")) {
//     // if present, the header is where you move the DIV from:
//     document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
//   } else {
//     // otherwise, move the DIV from anywhere inside the DIV: 
//     elmnt.onmousedown = dragMouseDown;
//   }

//   function dragMouseDown(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // get the mouse cursor position at startup:
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     document.onmouseup = closeDragElement;
//     // call a function whenever the cursor moves:
//     document.onmousemove = elementDrag;
//   }

//   function elementDrag(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // calculate the new cursor position:
//     pos1 = pos3 - e.clientX;
//     pos2 = pos4 - e.clientY;
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     // set the element's new position:
//     elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
//     elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
//   }

//   function closeDragElement() {
//     // stop moving when mouse button is released:
//     document.onmouseup = null;
//     document.onmousemove = null;
//   }
// }
});