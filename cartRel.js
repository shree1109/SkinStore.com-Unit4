function cartshow() {
  console.log("hii");
  window.location.href = "cart.html";
}

// humbarger code here

function myFunction() {
  var lik = document.querySelector("#navbar-links");
  if (lik.style.display === "block") {
    lik.style.display = "none";
  } else {
    lik.style.display = "block";
  }
}

// slidshow

//   let slideIndex = 0;
//   showSlides();

//   function showSlides() {
//     let i;
//     let slides = document.getElementsByClassName("slideOffers");
//     let dots = document.getElementsByClassName("dot");
//     for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) {
//       slideIndex = 1;
//     }
//     for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex - 1].style.display = "block";

//     setTimeout(showSlides, 2000);
//   }

// creating table here

var cartData = JSON.parse(localStorage.getItem("cart-data")) || [];

console.log(cartData);

displayitem();
totalprice();

function displayitem() {
  if (cartData.length === 0)
    return (document.querySelector("table").style.display = "none");

  document.querySelector("tbody").innerHTML = "";
  cartData.map(function (elm, i) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var img = document.createElement("img");
    img.setAttribute("src", elm.img);
    var span = document.createElement("span");
    span.textContent = elm.description;

    td1.append(img, span);

    // td1.append(span);

    var td2 = document.createElement("td");
    td2.textContent = "₹ " + elm.finalPrice;

 
    var td3 = document.createElement("td");
    var btn1 = document.createElement("button");
    btn1.textContent = "-";
    btn1.setAttribute("id","decres");

    btn1.addEventListener("click",function(){
       decresfun(elm,i)
    });

    var span2 = document.createElement("span");
    span2.textContent = elm.Qty;
  //   span2.setAttribute("id","qtyy");
    // console.log(span2.textContent);
   

    // console.log(elm.Qty)

    var btn2 = document.createElement("button");
    btn2.textContent = "+";

    btn2.setAttribute("id","incress");

    btn2.addEventListener("click",function(){
      incressfun(elm,i)
    });



    td3.append(btn1, span2, btn2);

    var td4 = document.createElement("td");
    td4.textContent =  "₹ " +  (elm.Qty)*(elm.finalPrice) ;
 
    // var rembtn = document.createElement("button");
    // rembtn.textContent = <i class="fa-solid fa-xmark"></i>;

    var td5 = document.createElement("td");
  //   var icondt5 = document.querySelector(".fa-trash-can");
    
  td5.innerHTML ='<i class="fa-solid fa-trash-can"></i>' ;
  td5.setAttribute("class","remov");
  td5.style.cursor = "pointer"

  

   

    td5.addEventListener("click", function () {
      renovefun(elm, i);
    });

    var tr1 = document.createElement("tr");
    var tdtr1 = document.createElement("td");
    var wishbtn = document.createElement("button");
    tdtr1.style.textAlign = "center";
    wishbtn.setAttribute("class", "wishbtn");
    wishbtn.textContent = "Save to Wishlist";
    tdtr1.append(wishbtn);

    tr.append(td1, td2, td3, td4, td5);

    tr1.append(tdtr1);

    document.querySelector("tbody").append(tr, tr1);
  });
}






function totalprice() {
  var total = cartData.reduce(function (ac, cur) {
    return ac + Number(cur.finalPrice*cur.Qty);
  }, 0);
  document.getElementById("totalPrice").textContent = total;
}





function renovefun(elm, idx) {
  cartData.splice(idx, 1);
  localStorage.setItem("cart-data", JSON.stringify(cartData));
  displayitem();
  totalprice();
}

function sort_pro() {
  var selected = document.getElementById("sortPro").value;
  if (selected === "low") {
    cartData.sort(function (a, b) {
      return a.finalPrice - b.finalPrice;
    });
  } else if (selected === "high") {
    cartData.sort(function (a, b) {
      return b.finalPrice - a.finalPrice;
    });
  }
  displayitem(cartData);
}



// cart quitity part 

function incressfun(elm,i){
  // document.querySelector("tbody").innerHTML = ""
var qtyf = cartData[i].Qty;
qtyf++;

cartData[i].Qty=qtyf;
//   console.log(qtyf);
//   document.querySelector("#qtyy").textContent = qtyf;

localStorage.setItem("cart-data", JSON.stringify(cartData));

displayitem(cartData);
totalprice(cartData);

 
}


function decresfun(elm,i){
  // document.querySelector("tbody").innerHTML = ""
  var qtyf = cartData[i].Qty;
  if(qtyf === 1){
      alert("Quantity of the product cannot be less than 1");
  }else{

      qtyf--;
  }

cartData[i].Qty=qtyf;
//   console.log(qtyf);
//   document.querySelector("#qtyy").textContent = qtyf;

localStorage.setItem("cart-data", JSON.stringify(cartData));

displayitem(cartData);
totalprice(cartData);

 
}





