jQuery_T4NT(document).ready(function($) {
  

     /**
     * Variant selection changed
     */
	  $( document ).on( "variant:change", function( evt, variant ) {
	    //console.log( variant );
	  });

});


myID = document.getElementById("myID");

var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 800) {
        myID.className = "free-trial-btn ss-bottomMenu ss-show"
    } else {
        myID.className = "free-trial-btn ss-bottomMenu ss-hide"
    }
};

window.addEventListener("scroll", myScrollFunc);