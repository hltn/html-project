$(document).ready(function(){
	
	var accordions = $(".ocps-accordion-toogle").get();
	var i;
	//console.log(accordions.length)
	for (i = 0; i < accordions.length; i++) {
		accordions[i].onclick = function(){
			$(this).parent().next().slideToggle(500);
	        
		}
		
	}
});

function ocps_open_sidenav() {
    document.getElementById("mySidenav").style.display = "block";
}
function ocps_close_sidenav() {
    document.getElementById("mySidenav").style.display = "none";
}

function myAccFunc() {
    var x = document.getElementById("demoAcc");
    if (x.className.indexOf("ocps-show") == -1) {
        x.className += " ocps-show";
        x.previousElementSibling.className += " ocps-green";
    } else {
        x.className = x.className.replace(" ocps-show", "");
        x.previousElementSibling.className =
        x.previousElementSibling.className.replace(" ocps-green", "");
    }
}

function ocps_toogleNavBar(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("ocps-show") == -1) {
        x.className += " ocps-show";
    } else {
        x.className = x.className.replace(" ocps-show", "");
    }
}

function ocps_openTabs(event,tabName) {
	
	  $(".tab").hide();
	  $("ul .tablink").removeClass("ocps-rightbar ocps-border-red");
	  
	  $("#"+tabName).fadeIn(1000);
	 
	  event.currentTarget.parentElement.className += " ocps-rightbar ocps-border-red";
	
}





function confirm_delete(){
	return confirm('This action will cannot restore. Are you sure?');
}

function ocps_toogleNavBar(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("ocps-show") == -1) {
        x.className += " ocps-show";
    } else {
        x.className = x.className.replace(" ocps-show", "");
    }
}






//jQuery time
//var parent, ink, d, x, y;
//$(".ocps-effect-ripple").click(function(e){
//	parent = $(this).parent();
//	//create .ink element if it doesn't exist
//	if(parent.find(".ink").length == 0)
//		parent.prepend("<span class='ink'></span>");
//		
//	ink = parent.find(".ink");
//	//incase of quick double clicks stop the previous animation
//	ink.removeClass("animate");
//	
//	//set size of .ink
//	if(!ink.height() && !ink.width())
//	{
//		//use parent's width or height whichever is larger for the diameter to make a circle which can cover the entire element.
//		d = Math.max(parent.outerWidth(), parent.outerHeight());
//		ink.css({height: d, width: d});
//	}
//	
//	//get click coordinates
//	//logic = click coordinates relative to page - parent's position relative to page - half of self height/width to make it controllable from the center;
//	x = e.pageX - parent.offset().left - ink.width()/2;
//	y = e.pageY - parent.offset().top - ink.height()/2;
//	
//	//set the position and add class .animate
//	ink.css({top: y+'px', left: x+'px'}).addClass("animate");
//})