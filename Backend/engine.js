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

const ProjectTitle1 = document.querySelector("#projectTitle1")
const ProjectTitle2 = document.querySelector("#projectTitle2")
const ProjectTitle3 = document.querySelector("#projectTitle3")

const ProjectDesc1 = document.querySelector("#projectDesc1")
const ProjectDesc2 = document.querySelector("#projectDesc2")
const ProjectDesc3 = document.querySelector("#projectDesc3")
/*
const ProjectImg1 = document.querySelector("#projectImg1")
const ProjectImg2 = document.querySelector("#projectImg2")
const ProjectImg3 = document.querySelector("#projectImg3")
*/

const aboutImg = document.querySelector("#despreLogo")
const aboutDesc = document.querySelector("#despreDesc")
const aboutDesc2= document.querySelector("#despreDesc2")


fetch('../backend/data.json')
        .then(response => response.json())
        .then(response => {
         // console.log(response);

          /*  Header  < */
          banner.src = response.logo_transparent;
          logo.src = response.logo_transparent;
          /*  Header  > */

          /*  Servicii  < */
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
          /*  Servicii  > */

          /*  Proiecte  < */
          ProjectTitle1.innerHTML = response.prTitle1;
          ProjectTitle2.innerHTML = response.prTitle2;
          ProjectTitle3.innerHTML = response.prTitle3;

          ProjectDesc1.innerHTML = response.prDesc1;
          ProjectDesc2.innerHTML = response.prDesc2;
          ProjectDesc3.innerHTML = response.prDesc3;

          /*  Proiecte  > */

          /*  About   < */
          aboutImg.src = response.logo_transparent;
          aboutDesc.innerHTML = response.abDesc;
          aboutDesc2.innerHTML = response.abDesc2;
          /*  About   > */
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

