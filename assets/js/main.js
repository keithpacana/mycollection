$(document).ready(function(){
 	$(".album-1 .label").click(function() {
 		location.href = "rock.html";
 	});
 	$(".album-2 .label").click(function() {
 		location.href = "pop.html";
 	});
  	$(".album-3 .label").click(function() {
 		location.href = "hiphop.html";
 	});
   	$(".album-4 .label").click(function() {
 		location.href = "jazz.html";
 	});
 	$(".label").hover(function(){
 		($(this).children().css("color","white"));
 		},
 		function() {($(this).children().css("color","black"));
 	});



  // $("#record1-1,#record1-2,#record1-3,#record1-4,#record1-5,#record1-6").hover(function() {
  //   $(this).css("top", "200px");
  // }, function() {
  //   $(this).css("top", "250px");
  // });
  // $("#record2-1,#record2-2,#record2-3,#record2-4,#record2-5,#record2-6").hover(function() {
  //   $(this).css("transition", "all .3s ease");
  // }, function() {
  //   $(this).css("transition", "none");
  // });
  // // $("#record3-1,#record3-2,#record3-3,#record3-4,#record3-5,#record3-6").hover(function() {
  // //   $(this).css("transition", "all .3s ease");
  // // }, function() {
  // //   $(this).css("transition", "none");
  // // });
  // $("#record4-1,#record4-2,#record4-3,#record4-4,#record4-5,#record4-6").hover(function() {
  //   $(this).css("transition", "all .3s ease");
  // }, function() {
  //   $(this).css("transition", "none");
  // });
  // $("#record5-1,#record5-2,#record5-3,#record5-4,#record5-5,#record5-6").hover(function() {
  //   $(this).css("transition", "all .3s ease");
  // }, function() {
  //   $(this).css("transition", "none");
  // });
  // $("#record6-1,#record6-2,#record6-3,#record6-4,#record6-5,#record6-6").hover(function() {
  //   $(this).css("transition", "all .3s ease");
  // }, function() {
  //   $(this).css("transition", "none");
  // });




 // dragElement(document.getElementById("record-1"));
 dragElement(document.getElementById("record1-1"));
 dragElement(document.getElementById("record1-2"));
 dragElement(document.getElementById("record1-3"));
 dragElement(document.getElementById("record1-4"));

 dragElement(document.getElementById("record2-1"));
 dragElement(document.getElementById("record2-2"));
 dragElement(document.getElementById("record2-3"));
 dragElement(document.getElementById("record2-4"));

  dragElement(document.getElementById("record3-1"));
 dragElement(document.getElementById("record3-2"));
 dragElement(document.getElementById("record3-3"));
 dragElement(document.getElementById("record3-4"));

  dragElement(document.getElementById("record4-1"));
 dragElement(document.getElementById("record4-2"));
 dragElement(document.getElementById("record4-3"));
 dragElement(document.getElementById("record4-4"));

  dragElement(document.getElementById("record5-1"));
 dragElement(document.getElementById("record5-2"));
 dragElement(document.getElementById("record5-3"));
 dragElement(document.getElementById("record5-4"));

  dragElement(document.getElementById("record6-1"));
 dragElement(document.getElementById("record6-2"));
 dragElement(document.getElementById("record6-3"));
 dragElement(document.getElementById("record6-4"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    // $("#record2-1,#record2-2,#record2-3,#record2-4,#record2-5,#record2-6").hover(function() {
    //     $(this).css("transition", "none"); 

    //   });
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV: 
    elmnt.onmousedown = dragMouseDown;
  }

  $("#reset-button").click(function() {
      document.getElementById("record1-1").style.top = "150px";
      document.getElementById("record1-1").style.left = "0";



      document.getElementById("record1-2").style.top = "150px";
      document.getElementById("record1-2").style.left = "0";
      document.getElementById("record1-3").style.top = "150px";
      document.getElementById("record1-3").style.left = "0";
      document.getElementById("record1-4").style.top = "150px";
      document.getElementById("record1-4").style.left = "0";


      document.getElementById("record2-1").style.top = "120px";
      document.getElementById("record2-1").style.left = "0";
      document.getElementById("record2-2").style.top = "120px";
      document.getElementById("record2-2").style.left = "0";
      document.getElementById("record2-3").style.top = "120px";
      document.getElementById("record2-3").style.left = "0";
      document.getElementById("record2-4").style.top = "120px";
      document.getElementById("record2-4").style.left = "0";

      document.getElementById("record3-1").style.top = "90px";
      document.getElementById("record3-1").style.left = "0";
      document.getElementById("record3-2").style.top = "90px";
      document.getElementById("record3-2").style.left = "0";
      document.getElementById("record3-3").style.top = "90px";
      document.getElementById("record3-3").style.left = "0";
      document.getElementById("record3-4").style.top = "90px";
      document.getElementById("record3-4").style.left = "0";

      document.getElementById("record4-1").style.top = "60px";
      document.getElementById("record4-1").style.left = "0";
      document.getElementById("record4-2").style.top = "60px";
      document.getElementById("record4-2").style.left = "0";
      document.getElementById("record4-3").style.top = "60px";
      document.getElementById("record4-3").style.left = "0";
      document.getElementById("record4-4").style.top = "60px";
      document.getElementById("record4-4").style.left = "0";

      document.getElementById("record5-1").style.top = "30px";
      document.getElementById("record5-1").style.left = "0";
      document.getElementById("record5-2").style.top = "30px";
      document.getElementById("record5-2").style.left = "0";
      document.getElementById("record5-3").style.top = "30px";
      document.getElementById("record5-3").style.left = "0";
      document.getElementById("record5-4").style.top = "30px";
      document.getElementById("record5-4").style.left = "0";

      document.getElementById("record6-1").style.top = "0px";
      document.getElementById("record6-1").style.left = "0";
      document.getElementById("record6-2").style.top = "0px";
      document.getElementById("record6-2").style.left = "0";
      document.getElementById("record6-3").style.top = "0px";
      document.getElementById("record6-3").style.left = "0";
      document.getElementById("record6-4").style.top = "0px";
      document.getElementById("record6-4").style.left = "0";
  });

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    $(elmnt).hover(function() {
        $(this).css("transition", "none"); 
      });
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
});