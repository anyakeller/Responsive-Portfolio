// Less original code here

// Couldn't have done it without you W3

// I translated their code to jquerey because the js was annoying to read

//I also did comment their code and the stuff I changed so HA!

// Get the elements with class="column"
var el = $(".column");
var i; //initiaize veriable

// To relayout the grid helper funtion
// Take  button value as parameter
function layout(valoo) {
    console.log("call layout: " + valoo);
    var widthPercent = String(100 * (1 / valoo)) + "%"; //the percentage the width should be
    console.log(widthPercent);
    //resize stuff
    for (i = 0; i < el.length; i++) {
        //for loop iterates through each collumn
        el[i].style.msFlex = widthPercent;
        el[i].style.flex = widthPercent;
    }
}

// give buttons click attribute
var btns = $(".btn");
btns.click(function() {
    var valhue = this.value;
    //remove previous button activebtn class
    var acti = $(".activebtn");
    acti.attr("class", "btn");
    // change new active button class
    this.className += " activebtn";
    //call layout
    layout(valhue);
});
