jQuery(function($) {

    console.log("Loaded Script");   

    var slideIndex = 1;
    
    showDivs(slideIndex);

    function plusDivs(n) {
    showDivs(slideIndex += n);
    }

    function showDivs(n) {
        var i;
        var x = document.getElementsByClassName("mySlides");
        if (n > x.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = x.length}
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";  
        }

        x[slideIndex-1].style.display = "block";  
    }

    $('#left-click').on("click", function (res, req){
        plusDivs(-1)
    });

    $('#right-click').on("click", function (res, req){
        plusDivs(1)
    });

});