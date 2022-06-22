// var theNewScript = document.createElement("script");
// theNewScript.type = "text/javascript";
// theNewScript.src = "https://code.jquery.com/jquery-3.6.0.min.js";
// document.getElementsByTagName("head")[0].appendChild(theNewScript);
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
// print("hi")

function sybreniumFunctions(){
  $(window).scroll(function() {
      if ($(this).scrollTop()) {
          $('.scroll-to-top').fadeIn();
      } else {
          $('.scroll-to-top').fadeOut();
      }
  });

  $(".scroll-to-top").click(function() {
      $("html, body").animate({scrollTop: 0}, 1000);
   });

   $(".sampleTest").text("Sample Test")
}
