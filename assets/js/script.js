// Sticky nav
window.onscroll = function() {
    stickyGlue();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickyGlue() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

//HELP ME
// Resize s1_intro width to fit photo but then clearfix when it's too smol
var s1_intro_width; //declare s1intro width variable
//console.log(s1_intro_width); //debug
//function to rearange things
function rearrange(s1width) {
    if (s1width > 600) {
        //I figured that's an appropriate minimum width for the text to be next to my photo
        //console.log("clear none");
        $("#silly_me").css("clear", "none");
        $("#silly_me").css("float", "right");
        $("#intro_text").css("float", "left");
        //change text width
        $("#intro_text").width(String(s1width - (250 + 75)));
    } else {
        //I figured that's an appropriate minimum width for the text to be next to my photo
        //console.log("clear left");
        $("#silly_me").css("clear", "left");
        $("#silly_me").css("float", "none");
        $("#intro_text").css("float", "none");
        //change text width
        $("#intro_text").width("100%");
    }
}

// size appropriatly on page load
$(document).ready(function() {
    s1_intro_width = $("#s1_intro").width(); //get s1intro width
    //console.log(s1_intro_width); //debug
    rearrange(s1_intro_width);
});
//detect resize
$(window).resize(function() {
    s1_intro_width = $("#s1_intro").width();
    //console.log(s1_intro_width); //debug
    rearrange(s1_intro_width);
});
