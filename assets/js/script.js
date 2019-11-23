document.addEventListener('DOMContentLoaded',(event) =>{
	var slideIndex = 1;
	showSlides(slideIndex);

	function plusSlides(n) {
	  showSlides(slideIndex += n);
	}

	function currentSlide(n) {
	  showSlides(slideIndex = n);
	}

	function showSlides(n) {
	  var i;
	  var slides = document.getElementsByClassName("mySlides");
	  if (n > slides.length) {slideIndex = 1}    
	  if (n < 1) {slideIndex = slides.length}
	  for (i = 0; i < slides.length; i++) {
	      slides[i].style.display = "none";  
	  }
	  slides[slideIndex-1].style.display = "block";
	}
	document.getElementById("prev").addEventListener("click",function(){
		plusSlides(-1);
	});

	document.getElementById("next").addEventListener("click",function(){
		plusSlides(-1);
	});
	/*Menu Burger au click*/
	$('.menu_burger').click(()=>{
  		$('.dropdown-content-mobile').toggle(400);
  	});

	/*Mapbox*/
    function maPosition(position) {
           var infopos = "Position déterminée :\n";
           infopos += "Latitude : "+position.coords.latitude +"\n";
           infopos += "Longitude: "+position.coords.longitude+"\n";
           console.log("gps " + infopos) ;
          var mymap = L.map('mapbox-map').setView([position.coords.latitude, position.coords.longitude], 13);
           L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
               attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
               maxZoom: 18,
               id: 'mapbox.streets',
               accessToken: 'pk.eyJ1IjoibWFtYWRvdTkzIiwiYSI6ImNrMTQydHQ0bjBlbHczZHRnZmV3Y3FheHMifQ.luU-b6G2gJAaY1OgSmqxhQ'
           }).addTo(mymap);
   	}

   // Si le navigateur permet de me géolocaliser
   if(navigator.geolocation){
       //getCurrentPosition permettant un ciblage ponctuel
       //watchPosition pour un suivi continu
       navigator.geolocation.getCurrentPosition(maPosition);
   }else {
       console.log("L'API Géoloc n'est pas disponible") ;
   }
});