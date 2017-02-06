/**
 *  Main config file for require.js file loader.
 *
 *  @author   Tim George <tim@timrgeorge.com>
 *  @version  1.0
 *
 **/

requirejs.config({
  //urlArgs: "bust=" +  (new Date()).getTime(),
  baseUrl:          '/assets/js/libs',
  paths: {
    app:            '/assets/js/app', 
    jquery:         [
                      'jquery-3.1.1.min',
                      '//code.jquery.com/jquery-3.1.1.min',
                      '//ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min'
                    ]
  }
});

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "block"; 
}
