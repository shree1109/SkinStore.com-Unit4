function cartshow(){
    console.log("hii")
    window.location.href = "cart.html";

}

// humbarger code here 

function myFunction(){
   var lik = document.querySelector("#navbar-links");
   if(lik.style.display === "block"){
    lik.style.display = "none";
   }else{
    lik.style.display = "block";
   }
}


// slidshow 

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slideOffers");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";  
// dots[slideIndex-1].classList.add("active");
//   dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


