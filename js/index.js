window.onload = () => {
setTimeout(function() {
	document.querySelector('.container').style.display = 'block'
	document.querySelector('.spinner-container').style.opacity = '0'
	document.querySelector('.spinner-container').style.visibility = 'hidden'
	getLocation();
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


//prevent form from reloading the page 
/*
var form = document.getElementById("myform");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener.onsubmit = handleForm;
*/


function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            // Success function
            showPosition, 
            // Error function
            null, 
            // Options. See MDN for details.
            {
               enableHighAccuracy: true,
               timeout: 5000,
               maximumAge: 0
            });
    } else { 
       geo= "Geolocation is not supported by this browser.";
    }

}

function showPosition(position) {
    latlon = position.coords.latitude + "," + position.coords.longitude;

    geo="https://maps.google.com/?q="+latlon;


}

/*function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            geo = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            geo = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            geo = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            geo = "An unknown error occurred."
            break;
    }
}*/

function whatsapp() {
getLocation();

let fullname = document.getElementById('fullname').value
let email = document.getElementById('email').value
let message = document.getElementById('message').value

let whatsappurl = "https://wa.me/2347040738967?text="+"Name of Customer: "+fullname+"%0a"
	+"Email Address: "+email+"%0a"
	+"Message: "+message+"%0a"
	+"Location: "+geo+"%0a"
	+"I would like to get started today";

window.open(whatsappurl,"_blank").focus();

};

function link() {
getLocation();

linkurl="https://wa.me/2347040738967?text="+"I would like to get started today."+"%0a"
	+"Location: "+geo+"%0a"
	+"My name is_";

   window.open(linkurl,"_blank").focus();

}



