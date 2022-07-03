function include(file) {
  var script  = document.createElement('script');
  script.src  = file;
  script.type = 'text/javascript';
  script.defer = true;
  document.getElementsByTagName('head').item(0).appendChild(script);
}
include("https://code.jquery.com/jquery-3.6.0.min.js");
include("https://cdn.jsdelivr.net/npm/pyscript-js@1.2.4/dist/js/pyscript.min.js");
var waitForjQLoad = function(){if(typeof jQuery != "undefined"){sybreniumFunctions();}else{window.setTimeout(waitForjQLoad, 1);}};window.setTimeout(waitForjQLoad, 1);

function sybreniumFunctions(){
  // sample test code
  $(".sampleTest").text("Sample Test") // A sample text to test it works

  // back to the top (scroll to the top function)
  $(window).scroll(function() {
      if ($(this).scrollTop()) {
          $('.scroll-to-the-top').fadeIn();
      } else {
          $('.scroll-to-the-top').fadeOut();
      }
  });

  $(".scroll-to-the-top").click(function() {
      $("html, body").animate({scrollTop: 0}, 1000);
   });

}
