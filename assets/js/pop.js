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
 	$('img[alt="aqua"]').click(function() {
 		var src = $('img[alt="aqua"]').attr('src');
 		document.getElementById("cover").src= src;
    $("#subtitle,.albums,#record,#album-info,description,artist-info").fadeOut();
    var image = '<img class="album-large" src = "' 
    + src + '"/>';
    var info = "<div id='album-info'>Aquarium <br> <div id='artist'>Aqua (1997)</div> </div>";
    var all = "<div class='description'>" + image +info+
    "</div> <div id='artist-info'>" +
    "<p> One of my childhood albums, which many people know for the song \"Barbie Girl\". I enjoy listening to this album because it's such a fun and care-free album that makes you just wanna get up and dance. The songs kind of remind me of those that are played in Dance dance revolution since they're so fast and upbeat. My personal favorites are \"My Oh My\", \"Doctor Jones\", and \"Heat of the night\".</p></div>";
    $(all).appendTo('.test');

    $(".test,#back-button,#play,#pause").fadeIn();
 	});
  	$('img[alt="gwen"]').click(function() {
  		 // document.getElementById("record").style.opacity= "0.5";
 		var src = $('img[alt="gwen"]').attr('src');
 		document.getElementById("cover").src= src;
    $("#subtitle,.albums,#record,#album-info,description,artist-info").fadeOut();
    var image = '<img class="album-large" src = "' 
    + src + '"/>';
    var info = "<div id='album-info'>Love. Angel. Music. Baby. <br> <div id='artist'>Gwen Stefani (2004)</div> </div>";
    var all = "<div class='description'>" + image +info+
    "</div> <div id='artist-info'>" +
    "<p>A popular album that I and many others in my generation have grown up listening to. \"Hollaback girl\" is such an iconic song and has taught me and many how to spell bananas. \"Rich Girl\" showed Gwen Stefani and Eve are a perfect duo. My personal favorite is \"Luxurious\"; I can't find the words to describe how I feel when listening to it, but luxurious closely describes it\". </p></div>";
    $(all).appendTo('.test');
    $(".test,#back-button,#play,#pause").fadeIn();
 	});

   	$('img[alt="donna"]').click(function() {
 		var src = $('img[alt="donna"]').attr('src');
 		document.getElementById("cover").src= src;
    $("#subtitle,.albums,#record,#album-info,description,artist-info").fadeOut();
    var image = '<img class="album-large" src = "' 
    + src + '"/>';
    var info = "<div id='album-info'>On the Radio: Greatest Hits<br> <div id='artist'>Donna Summer (1979)</div> </div>";
    var all = "<div class='description'>" + image +info+
    "</div> <div id='artist-info'>" +
    "<p>The Queen of Disco and her greatest hits. If you're looking for songs to dance or sing along to, this is the album. I also like how the the end of each song transitions smoothly to the next song. My favorites are"+
    "<li>On the Radio</li>"+
    "<li>Love to love you baby</li>"+
    "<li>Last Dance</li>"+
    "<li>MacArthur Park</li>"+
    "<li>Bad Girls</li>"+
    "<li>Hot Stuff</li>"+
    "</p></div>";
    $(all).appendTo('.test');
    $(".test,#back-button,#play,#pause").fadeIn();
 	});

   	$('img[alt="ewf"]').click(function() {
 		var src = $('img[alt="ewf"]').attr('src');
 		document.getElementById("cover").src= src;
    $("#subtitle,.albums,#record,#album-info,description,artist-info").fadeOut();
    var image = '<img class="album-large" src = "' 
    + src + '"/>';
    var info = "<div id='album-info'>All 'n All<br> <div id='artist'>Earth Wind and Fire (1977)</div> </div>";
    var all = "<div class='description'>" + image +info+
    "</div> <div id='artist-info'>" +
    "<p>Another feel good album with great songs to dance along to. Many of the songs definitely have a smooth texture/vibe, a good blend of disco and soul. Songs like \"Beijo(Interlude)\" and \"Serpentine Fire\" make you just wanna dance and sing along. Also great vocals in songs such as \"Love's Holiday\", a beautiful song really. And I can't forget about the iconic \"Fantasy\", one of the many songs I know every word to."
    +
    " </p></div>";
    $(all).appendTo('.test');
    $(".test,#back-button,#play,#pause").fadeIn();
 	});
   	$('img[alt="par"]').click(function() {
 		var src = $('img[alt="par"]').attr('src');
 		document.getElementById("cover").src= src;
    $("#subtitle,.albums,#record,#album-info,description,artist-info").fadeOut();
    var image = '<img class="album-large" src = "' 
    + src + '"/>';
    var info = "<div id='album-info'>Mothership Connection<br> <div id='artist'>Parliament (1975)</div> </div>";
    var all = "<div class='description'>" + image +info+
    "</div> <div id='artist-info'>" +
    "<p>George Clinton is a legend. Nobody does funk like him. Mothership Connection definitely paved the way for many artists especially hip-hop artists such as Dr. Dre who has sampled two of the songs in his album \"The Chronic\". My favorites are:"
    +"<li>\"P-funk (Wants to Get funked up)\"</li>"
    +"<li>\"Mothership Connection (Starchild) \"</li>"
    +"<li>\"Give up the funk\"</li>"
    "  </p></div>";
    $(all).appendTo('.test');
    $(".test,#back-button,#play,#pause").fadeIn();
 	});
   	$('img[alt="thriller"]').click(function() {
 		var src = $('img[alt="thriller"]').attr('src');
 		document.getElementById("cover").src= src;
    $("#subtitle,.albums,#record,#album-info,description,artist-info").fadeOut();
    var image = '<img class="album-large" src = "' 
    + src + '"/>';
    var info = "<div id='album-info'>Thriller<br> <div id='artist'>Michael Jackson (1982)</div> </div>";
    var all = "<div class='description'>" + image +info+
    "</div> <div id='artist-info'>" +
    "<p>The King of Pop and his most iconic album. No words can describe his brilliance. Thriller gave us the moonwalk along with iconic songs such as:"+
    "<li>\"Wannabe startin somethin\"</li>"+
    "<li>\"Thriller\"</li>"+
    "<li>\"Beat it\"</li>"+
    "<li>\"Billie Jean\"</li>"+
    "<li>\"Human Nature\"</li>"+
    "<li>\"P.Y.T\"</li>"+
    "</p></div>";
    $(all).appendTo('.test');
    $(".test,#back-button,#play,#pause").fadeIn();
 	});
   	$('img[alt="pet"]').click(function() {
 		var src = $('img[alt="pet"]').attr('src');
 		document.getElementById("cover").src= src;
    $("#subtitle,.albums,#record,#album-info,description,artist-info").fadeOut();
    var image = '<img class="album-large" src = "' 
    + src + '"/>';
    var info = "<div id='album-info'>Smiley Smile<br> <div id='artist'>The Beach Boys (1967)</div> </div>";
    var all = "<div class='description'>" + image +info+
    "</div> <div id='artist-info'>" +
    "<p>If I'm not mistaken this might be a more polished version of \"Smile Sessions\". There's no Beach Boys song that can't cheer me up. My personal favorites are \"Heroes and Villains\" I like the sound effects in the background similar to that of animated cartoons. It definitely gives off a care-free childlike fun feeling. I also like the barbershop quartet style of songs such as \"Vegetable\". And I didn't forget about the iconic \"Good Vibrations\", this song really showed that Carole Kaye is an amazing bassist. </p></div>";
    $(all).appendTo('.test');
    $(".test,#back-button,#play,#pause").fadeIn();
 	});
   	$('img[alt="tomtom"]').click(function() {
 		var src = $('img[alt="tomtom"]').attr('src');
 		document.getElementById("cover").src= src;
    $("#subtitle,.albums,#record,#album-info,description,artist-info").fadeOut();
    var image = '<img class="album-large" src = "' 
    + src + '"/>';
    var info = "<div id='album-info'>Tom Tom Club<br> <div id='artist'>Tom Tom Club (1981)</div> </div>";
    var all = "<div class='description'>" + image +info+
    "</div> <div id='artist-info'>" +
    "<p>This is another album that is great to dance to or just have playing as feel good/care free music. The song \"Genius of Love\" is a timeless song. This song came out in 81 and was later sampled by Mariah Carey in her song \"Fantasy\", which was a number one hit in 96. Even today if you played that song, many will recognize it or if not, know it and dance to it. Tom Tom Club's debut album is full of songs to dance to! </p></div>";
    $(all).appendTo('.test');
    $(".test,#back-button,#play,#pause").fadeIn();
 	});
   	$('img[alt="carp"]').click(function() {
 		var src = $('img[alt="carp"]').attr('src');
 		document.getElementById("cover").src= src;
    $("#subtitle,.albums,#record,#album-info,description,artist-info").fadeOut();
    var image = '<img class="album-large" src = "' 
    + src + '"/>';
    var info = "<div id='album-info'>Carpenters<br> <div id='artist'>Carpenters (1971)</div> </div>";
    var all = "<div class='description'>" + image +info+
    "</div> <div id='artist-info'>" +
    "<p>Beautiful album. Karen Carpenter has the voice of an angel; she was taken from us too soon. Karen's voice shines in ballads such as \"Rainydays and Mondays\", \"Let me be the one\", and \"Superstar\".</p></div>";
    $(all).appendTo('.test');
    $(".test,#back-button,#play,#pause").fadeIn();
 	});
   	$('img[alt="stevie"]').click(function() {
 		var src = $('img[alt="stevie"]').attr('src');
 		document.getElementById("cover").src= src;
    $("#subtitle,.albums,#record,#album-info,description,artist-info").fadeOut();
    var image = '<img class="album-large" src = "' 
    + src + '"/>';
    var info = "<div id='album-info'>Songs in the Key of Life<br> <div id='artist'>Stevie Wonder (1971)</div> </div>";
    var all = "<div class='description'>" + image +info+
    "</div> <div id='artist-info'>" +
    "<p>Words can't describe how amazing and talented Stevie Wonder is so I'll just list out my favorites."+
    "<li>Sir Duke</li>"+
    "<li>I wish</li>"+
    "<li>Knocks me off my Feet</li>"+
    "<li>Pastime Paradise</li>"+
    "<li>Summer Soft</li>"+
    "<li>Isn't she Lovely</li>"+
    "<li>As</li>"+
    "</p></div>";
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