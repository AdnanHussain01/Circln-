 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
  import { 
    getDatabase,
    onChildAdded,
    ref,
   } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDcvbE61jU1aE-QskwXiGaART7ubV4Bsdo",
    authDomain: "circln-a1ed5.firebaseapp.com",
    projectId: "circln-a1ed5",
    storageBucket: "circln-a1ed5.appspot.com",
    messagingSenderId: "417935408963",
    appId: "1:417935408963:web:91d6184d03c35f1a8eb9f6",
    measurementId: "G-78P4C3SGHS"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const database = getDatabase();

//  var arr = [
//     {
//      img : "images/bs1.webp",
//      pruname : "London Fog's Men",
//      price : "30$",
//     },
//     {
//         img : "images/bs2.webp",
//         pruname : "FLORAL JACKQUARD PULLOVER",
//         price : "50$",
//     },
//     {
//         img : "images/bs3.webp",
//         pruname : "Drop Women's Maya Silky slip Skirt",
//         price : "44$",
//     },
//     {
//         img : "images/bs4.webp",
//         pruname : "Star Vixen Women's Black Dress",
//         price : "48$",
//     },
//     {
//         img : "http://cdn.shopify.com/s/files/1/2526/7474/products/N-LP006-2_1200x1200.jpg?v=1562580010",
//         pruname : "Heavy Material Salwar Kameez Suit with Dupatta for Women",
//         price : "47$",
//     },
//     {
//         img : "https://cdn.shopify.com/s/files/1/0586/8031/1993/products/fer_800x.jpg?v=1656577787",
//         pruname : "High Waist Long Sleeve Floral Print Maxi Dresses Casual Party Long Dress",
//         price : "24$",
//     },
//     {
//         img : "http://cdn.shopify.com/s/files/1/0539/7318/8776/products/LPT22-02-1.jpg?v=1667819574",
//         pruname : "Bridal Anarkali Gown Suit For Women",
//         price : "81$",
//     },
//     {
//         img : "http://cdn.shopify.com/s/files/1/0510/7535/0693/products/AA430103_2_1200x1200.jpg?v=1644844748",
//         pruname : "Salwar Kameez Silk Dupatta Stitched Suit",
//         price : "67$",
//     },
//   ]

var productarr = []

window.getProduct = function(){
    const Product = ref(database, `Product/`)
    onChildAdded(Product,function(data){
        productarr.push(data.val())
        
    })
    console.log(productarr)
}
getProduct();

var cardcontainer = document.getElementById('cardcontainer'); 

window.showProduct = function(){
    for(var i = 0; i<productarr.length; i++){
        cardcontainer.innerHTML += `<div class="shoppingcard">
        <div class="carthover">
          <img class="bsimg" src="${productarr[i].img}" />
          <button class="adddtocart">ADD TO CART</button>
        </div>
        <div class="collectionbox">
          <p>
            <span class="floral">
            ${productarr[i].pruname}
            </span>
            <br />
            ${productarr[i].price}
          </p>
          <p>
            <a href=""><i class="fa-regular fa-star starcolor"></i></a>
            <a href=""><i class="fa-regular fa-star starcolor"></i></a>
            <a href=""><i class="fa-regular fa-star starcolor"></i></a>
            <a href=""><i class="fa-regular fa-star starcolor"></i></a>
            <a href=""><i class="fa-regular fa-star starcolor"></i></a>
          </p>
        </div>
      </div>`
    }
}
setTimeout(function(){
    showProduct()
},2000);

var swiper = new Swiper(".mySwiper", {
    autoplay:{
        delay: 2500,
    }
});