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
 	$('img[alt="carti"]').click(function() {
 		var src = $('img[alt="carti"]').attr('src');
 		document.getElementById("cover").src= src;
    $("#subtitle,.albums,#record,#album-info,description,artist-info").fadeOut();
    var image = '<img class="album-large" src = "' 
    + src + '"/>';
    var info = "<div id='album-info'>Die Lit<br> <div id='artist'>Playboi Carti (2018)</div> </div>";
    var all = "<div class='description'>" + image +info+
    "</div> <div id='artist-info'>" +
    "<p>One of the best albums of 2018. I might be bias since I'm a big Playboi Carti fan. Nevertheless, my personal favorites are:"+
    "<li>R.I.P</li>"+
    "<li>Lean 4 Real</li>"+
    "<li>Shoota</li>"+
    "<li>Right Now</li>"+
    "<li>Pull Up</li>"+
    "<li>Choppa Won't Miss</li>"+
    "</p></div>";
    $(all).appendTo('.test');
    $(".test,#back-button,#play,#pause").fadeIn();
 	});

  	$('img[alt="dangelo"]').click(function() {
 	var src = $('img[alt="dangelo"]').attr('src');
    document.getElementById("cover").src= src;
    $("#subtitle,.albums,#record,#album-info,description,artist-info").fadeOut();
    var image = '<img class="album-large" src = "' 
    + src + '"/>';
    var info = "<div id='album-info'>Brown Sugar<br> <div id='artist'>D'Angelo (1995)</div> </div>";
    var all = "<div class='description'>" + image +info+
    "</div> <div id='artist-info'>" +
    "<p>D'Angelo is too smooth. \"Brown Sugar\" well definitely make you feel relaxed and not only is it because the song is about weed. That threw me off when I first heard about it; I always thought it was about a female. My personal favorites are:"+
    "<li>\"Brown Sugar\"</li>"+
    "<li>\"Jonz in my bonz\"</li>"+
    "<li>\"Me and those Dreamin eyes of Mine\"</li>"+
    "<li>\"Shit, Damn, Motherfucker\"</li>"+
    "</p></div>";
    $(all).appendTo('.test');
    $(".test,#back-button,#play,#pause").fadeIn();
 	});
   	$('img[alt="lilkim"]').click(function() {
 		var src = $('img[alt="lilkim"]').attr('src');
 		document.getElementById("cover").src= src;
    $("#subtitle,.albums,#record,#album-info,description,artist-info").fadeOut();
    var image = '<img class="album-large" src = "' 
    + src + '"/>';
    var info = "<div id='album-info'>Hardcore<br> <div id='artist'>Lil' Kim (1996)</div> </div>";
    var all = "<div class='description'>" + image +info+
    "</div> <div id='artist-info'>" +
    "<p> One of my favorite 90s rap albums. Lil Kim's \"Hardcore\" is untouchable. This is often regarded as the female rap bible and if you listen to it, you'll understand why. Lil Kim's flow is amazing and shines well in songs such as \"Big Momma Thing\", \"Spend a little Doe\" , and \"Queen B@#$H\". \"Crush on You\", that sample is perfect and super catchy. Kim's remake of Biggie's \"Dreams\" is a breath of fresh air.</p></div>";
    $(all).appendTo('.test');
    $(".test,#back-button,#play,#pause").fadeIn();
 	});
   	$('img[alt="mc"]').click(function() {
 		var src = $('img[alt="mc"]').attr('src');
 		document.getElementById("cover").src= src;
    $("#subtitle,.albums,#record,#album-info,description,artist-info").fadeOut();
    var image = '<img class="album-large" src = "' 
    + src + '"/>';
    var info = "<div id='album-info'>Daydream<br> <div id='artist'>Mariah Carey (1996)</div> </div>";
    var all = "<div class='description'>" + image +info+
    "</div> <div id='artist-info'>" +
    "<p>Although Mariah had many peaks in her career, Daydream is my personal favorite. The album begins with \"Fantasy\" with the funky beat sampled from Tom Tom Club's \"Genius of Love\" makes me wanna get up and dance. \"Always be my baby\" a timeless song that gives me a nostalgic vibe. Mariah's range shine in songs such as \"Underneath the Stars\" and \"One Sweet Day\". This album proved that she really is an amazing vocalist, song writer, and artist. </p></div>";
    $(all).appendTo('.test');
    $(".test,#back-button,#play,#pause").fadeIn();
 	});
   	$('img[alt="outkast"]').click(function() {
 		var src = $('img[alt="outkast"]').attr('src');
 		document.getElementById("cover").src= src;
    $("#subtitle,.albums,#record,#album-info,description,artist-info").fadeOut();
    var image = '<img class="album-large" src = "' 
    + src + '"/>';
    var info = "<div id='album-info'>Aquemini<br> <div id='artist'>OutKast (1998)</div> </div>";
    var all = "<div class='description'>" + image +info+
    "</div> <div id='artist-info'>" +
    "<p>Name a more iconic duo than Big Boi and Andre 3000. Another timeless album, with classic and versatile songs such as \"Da Art of Storytellin (Part 1)\" and \"SpottieOttieDopaliscious\""+
    "sampled by J.Cole and Beyonce. Some of my personal favorites include:"+
    "<li>Rosa Parks</li>"+
    "<li>Aquemini</li>"+
    "<li>Slump</li>"+
    "<li>Skew it on the Bar-B</li>"+
    "<li>West Savannah</li>"+
    "<li>SpottieOttieDopaliscious</li>"+
    "</p></div>";
    $(all).appendTo('.test');
    $(".test,#back-button,#play,#pause").fadeIn();
 	});
   	$('img[alt="tina"]').click(function() {
 		var src = $('img[alt="tina"]').attr('src');
 		document.getElementById("cover").src= src;
    $("#subtitle,.albums,#record,#album-info,description,artist-info").fadeOut();
    var image = '<img class="album-large" src = "' 
    + src + '"/>';
    var info = "<div id='album-info'>Tina Snow<br> <div id='artist'>Megan Thee Stallion (2018)</div> </div>";
    var all = "<div class='description'>" + image +info+
    "</div> <div id='artist-info'>" +
    "<p>I've only recently started listening to Megan Thee Stallion and her album \"Tina Snow\" is already in my top albums of 2019."+
    "Megan Thee Stallion definitely a great rapper, but it's her lyrics that keep me coming. Her lyrics are just so empowering, memorable, and funny. Some of my favorites are"+
    "<li>Hot Girl</li>"+
    "<li>Freak Nasty</li>"+
    "<li>Big Ole Freak</li>"+
    "<li>Cocky Af</li>"+
    "</p></div>";
    $(all).appendTo('.test');
    $(".test,#back-button,#play,#pause").fadeIn();
 	});
   	$('img[alt="snoop"]').click(function() {
 		var src = $('img[alt="snoop"]').attr('src');
 		document.getElementById("cover").src= src;
    $("#subtitle,.albums,#record,#album-info,description,artist-info").fadeOut();
    var image = '<img class="album-large" src = "' 
    + src + '"/>';
    var info = "<div id='album-info'>Doggystyle<br> <div id='artist'>Snoop Dogg (1993)</div> </div>";
    var all = "<div class='description'>" + image +info+
    "</div> <div id='artist-info'>" +
    "<p>Funk and Hip-hop are untouchable and this album shows that. Some of my favorite songs are:"+
    "<li>\"G funk\"</li>"+
    "<li>\"Gin and Juice\"</li>"+
    "<li>\"Who am I (What's my Name?)</li>"+
    "<li>\"Ain't no fun\"</li>"+
    "</p></div>";

    $(all).appendTo('.test');
    $(".test,#back-button,#play,#pause").fadeIn();
 	});
   	$('img[alt="dre"]').click(function() {
 		var src = $('img[alt="dre"]').attr('src');
 		document.getElementById("cover").src= src;
    $("#subtitle,.albums,#record,#album-info,description,artist-info").fadeOut();
    var image = '<img class="album-large" src = "' 
    + src + '"/>';
    var info = "<div id='album-info'>The Chronic<br> <div id='artist'>Dr. Dre (1992)</div> </div>";
    var all = "<div class='description'>" + image +info+
    "</div> <div id='artist-info'>" +
     "<p>Nuthin but a G Thang. That was my high school slogan during senior year inspired by Dr. Dre's song \"Nuthin but a G thang\". In addition to Nuthin but a G Thang, The Chronic gave us \"Bitches ain't shit\", which is unironically used by many teens. As aforementioned, there's nothing better than hip-hop with funk samples especially from that of Funkadelic in Dre's songs such as \"Let me Ride\" and \"The Roach\". The cherry on top of this album is Snoop Dogg. Dr. Dre and Snoop Dogg are really an untouchable rap duo.</p></div>";
    $(all).appendTo('.test');
    $(".test,#back-button,#play,#pause").fadeIn();
 	});
   	$('img[alt="new"]').click(function() {
 		var src = $('img[alt="new"]').attr('src');
 		document.getElementById("cover").src= src;
    $("#subtitle,.albums,#record,#album-info,description,artist-info").fadeOut();
    var image = '<img class="album-large" src = "' 
    + src + '"/>';
    var info = "<div id='album-info'>New Edition<br> <div id='artist'>New Edition (1984)</div> </div>";
    var all = "<div class='description'>" + image +info+
    "</div> <div id='artist-info'>" +
    "<p>This album is full of catchy songs great for singing and dancing to such as \"Cool it Now\", \"Mr. Telephone Man\", \"Baby Love\", and \"Secret\". I can't forget \"I'm Leaving You Again\" and the intro which was sampled by Bow Wow and Ciara's 00s hit song \"Like You\". It's crazy to think how young they were here.</p></div>";
    $(all).appendTo('.test');
    $(".test,#back-button,#play,#pause").fadeIn();
 	});
   	$('img[alt="lauryn"]').click(function() {
 		var src = $('img[alt="lauryn"]').attr('src');
 		document.getElementById("cover").src= src;
    $("#subtitle,.albums,#record,#album-info,description,artist-info").fadeOut();
    var image = '<img class="album-large" src = "' 
    + src + '"/>';
    var info = "<div id='album-info'>Miseducation of Lauryn Hill<br> <div id='artist'>Lauryn Hill (1998)</div> </div>";
    var all = "<div class='description'>" + image +info+
    "</div> <div id='artist-info'>" +
    "<p>\"I was uninspired since Lauryn Hill retired\" -Kanye West. The queen herself, Lauryn Hill. Miseducation is truly a legendary album. From hit songs such as \"Doo Woop (That Thing)\" and \"Ex-factor\" to collabs such as \"To Zion\", \"I used to love him\", and \"Nothing even matters\", The Miseducation is a timeless album deserving of its grammy.</p></div>";
    $(all).appendTo('.test');
    $(".test,#back-button,#play,#pause").fadeIn();
 	});

    $('img[alt="df"]').click(function() {
    var src = $('img[alt="df"]').attr('src');
    document.getElementById("cover").src= src;
    $("#subtitle,.albums,#record,#album-info,description,artist-info").fadeOut();
    var image = '<img class="album-large" src = "' 
    + src + '"/>';
    var info = "<div id='album-info'>My Beautiful Dark Twisted Fantasy<br> <div id='artist'>Kanye West 2010</div> </div>";
    var all = "<div class='description'>" + image +info+
    "</div> <div id='artist-info'>" +
    "<p>One of my favorite Kanye albums hands down. The intro \"Dark Fantasy\" seems so grand with the choir in the beginning, which transitions to Kanye rapping, and ends in the choir. Kanye's flow on this is amazing; he really is a genius. In \"Gorgeous\" Kanye is really preaching"+
    "about social issues and how African Americans are treated unfairly. Great message and production. Kanye and Cudi are a duo to be messed with. The third song \"Power\" makes me feel so empowered and ready to join the revolution or something. Also props to Kanye for that King Crimson sample. \"Monster\" an iconic song with" +
    "amazing artists featured. Nicki Minaj's verse is definitely unforgetable. And Bon Iver on a Kanye song? Who would've thought?! Especially on a fast-paced rap song like \"Monster\". \"So Appalled\" again Kanye is preaching to the choir. \"Devil in a new Dress\" one of my personal favorites. Lastly, Aphex Twin on \"Blame Game\". Amazing.</p></div>";
    $(all).appendTo('.test');
    $(".test,#back-button,#play,#pause").fadeIn();
    });

    $('img[alt="brandy"]').click(function() {
    var src = $('img[alt="brandy"]').attr('src');
    document.getElementById("cover").src= src;
    $("#subtitle,.albums,#record,#album-info,description,artist-info").fadeOut();
    var image = '<img class="album-large" src = "' 
    + src + '"/>';
    var info = "<div id='album-info'>Brandy<br> <div id='artist'>Brandy (1994)</div> </div>";
    var all = "<div class='description'>" + image +info+
    "</div> <div id='artist-info'>" +
    "<p>Brandy is definitely an underrated singer. Her debut album proves that she does have the range! Brandy's vocals"+
    "truly shine in \"Im Yours\" and \"Brokenhearted\". Whitney's influence is apparent in Brandy's riffs and runs. I can't overlook"+
    "some of the popular songs such as \"I wanna be down\" a hit in the 90s along with feel good songs such as \"Sunny Day\".</p></div>";
    $(all).appendTo('.test');
    $(".test,#back-button,#play,#pause").fadeIn();
    });
});