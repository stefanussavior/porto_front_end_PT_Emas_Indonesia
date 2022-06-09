window.onscroll = function(){scrollFunction()}
function scrollFunction(){
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60){
        document.getElementById("navbar").style.padding = "20px 10px";
        document.getElementById("logo").style.padding = "25px";
    } else {
        document.getElementById("navbar").style.padding = "10px 10px";
        document.getElementById("logo").style.padding = "20px"; 
    }
}

function myFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

var myFar;

function myFunction() {
  myFar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("loading").style.display = "block";
}