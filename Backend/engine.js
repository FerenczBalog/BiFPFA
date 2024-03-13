const banner = document.querySelector("#banner")
const logo = document.querySelector('#logo')

const serv1 = document.querySelector('#serv-1')
const serv2 = document.querySelector('#serv-2')
const serv3 = document.querySelector('#serv-3')
const serv4 = document.querySelector('#serv-4')
const serv5 = document.querySelector('#serv-5')
const serv6 = document.querySelector('#serv-6')

const servDesc1 = document.querySelector('#servDesc-1')
const servDesc2 = document.querySelector('#servDesc-2')
const servDesc3 = document.querySelector('#servDesc-3')
const servDesc4 = document.querySelector('#servDesc-4')
const servDesc5 = document.querySelector('#servDesc-5')
const servDesc6 = document.querySelector('#servDesc-6')

fetch('../backend/data.json')
        .then(response => response.json())
        .then(response => {
          console.log(response);

          banner.src = response.logo_transparent;
          logo.src = response.logo_transparent

          serv1.innerHTML = response.serv1;
          serv2.innerHTML = response.serv2;
          serv3.innerHTML = response.serv3;
          serv4.innerHTML = response.serv4;
          serv5.innerHTML = response.serv5;
          serv6.innerHTML = response.serv6;

          servDesc1.innerHTML = response.servDesc1;
          servDesc2.innerHTML = response.servDesc2;
          servDesc3.innerHTML = response.servDesc3;
          servDesc4.innerHTML = response.servDesc4;
          servDesc5.innerHTML = response.servDesc5;
          servDesc6.innerHTML = response.servDesc6;
    }
    )
    .catch(function(err) {
    console.log('Fetch Error :-S', err);
    });

// SLIDESHOW <

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
// SLIDESHOW >

