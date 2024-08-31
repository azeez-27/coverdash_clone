const headings = ["startups.",  "freelancers.", "ecommerce merchants.", "small businesses."];
let currentIndex = 0;

function rotateHeading() {
    const headingElement = document.getElementById("heading-rotator");

    headingElement.style.animation = "fadeOut 1s ease-in-out";
    
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % headings.length;
        headingElement.textContent = headings[currentIndex];
        
        headingElement.style.animation = "fadeIn 1s ease-in-out";
    }, 1000);
}

setInterval(rotateHeading, 5000);

function toggleMenu() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("my-slides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-slide", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active-slide";
  setTimeout(showSlides, 4000);
}
