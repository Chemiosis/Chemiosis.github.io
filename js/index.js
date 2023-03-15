window.onload = () => {
setTimeout(function() {
	document.querySelector('.container').style.display = 'block'
	document.querySelector('.spinner-container').style.opacity = '0'
	document.querySelector('.spinner-container').style.visibility = 'hidden'
},4000);
};


function change() {
     if (document.getElementById('sidepop').style.right != 0) {
    document.querySelector("#menu").style.right = "5rem"
   document.querySelector("#sidepop").style.right = "-40rem"
   document.querySelector(".line").style.background.color = "white"
   document.querySelector("#line1").style.transform = "rotate(0deg) translate(0rem, 0rem)"
   document.querySelector("#line3").style.transform = "rotate(0deg) translate(0rem, 0rem)"
   document.querySelector("#line2").style.opacity = "1"
   document.querySelector("#line2").style.visibility = "visible"
   document.querySelector("span").style.opacity = "0"
  setTimeout(function() {location.reload();}, 300);
        }

        else{
   document.querySelector("#menu").style.right = "30%"
   document.querySelector("#sidepop").style.right = "0"
   document.querySelector(".line").style.background.color = "rgba(0,0,0,0.8)"
   document.querySelector("#line1").style.transform = "rotate(45deg) translate(0.3rem, 0.8rem)"
   document.querySelector("#line3").style.transform = "rotate(-45deg) translate(0.3rem, -0.8rem)"
   document.querySelector("#line2").style.opacity = "0"
   document.querySelector("#line2").style.visibility = "hidden"
        }
  
};





function hoverp(){
  document.querySelector("span").style.opacity = "1"
  document.querySelector("span").style.visibility = "visible"
};

function removep() {
document.querySelector("span").style.opacity = "0"
document.querySelector("span").style.visibility = "hidden"
};


function scroll() {
document.querySelector("html").style.scrollBehavior = "smooth";
setTimeout(function() { document.querySelector("html").style.scrollBehavior = "unset";}, 700);
};













