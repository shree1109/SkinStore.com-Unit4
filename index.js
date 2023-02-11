
function cartshow(){
    console.log("hii")
    window.location.href = "cart_page.html";
      // var cartlength = JSON.parse(localStorage.getItem("cart-data"));
      // var show = cartlength.length;
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
document.getElementById("signbtn").addEventListener("click" , alertbox);
function alertbox(){
var text = document.getElementById("emailsignup").value;
  if(text.length === 0){
    alert("Please Enter Email to avail Discount");
  }
  else{
    alert("Congratualations! you have got 20% Discount on your Next Purchase");
  }
}
//  document.querySelector(".fa-solid fa-magnifying-glass fa-2x").addEventListener("click",displaysearchprod );
//  function displaysearchprod() {
   
//  }
//  var search_data;
//  var search_value = document.querySelectorAll("#search");
// //  var filtcatg=document.querySelectorAll(".filtercatg");
// search_data.forEach(element => {
//             element.addEventListener("change",function(e){
//                 e.target.value;
//                 // console.log(e.target.value);
//                 search_data=printData.filter(function(elem){
//                     return elem.brand==e.target.value;
//                 });
//                 if(search_data.length==0){
//                     alert("Sorry, no products matched your selection");
//                     displayProduct(printData);
//                 }else{
                   
//                 displayProduct(search_data);
//                 // console.log(filt_Data,filt_Data.length)
//                 document.querySelector("#displayheading").textContent= e.target.value;

//                 }
            

//             })
//         });



