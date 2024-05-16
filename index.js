let addSpan = document.querySelector(".add");
let numSpan = document.querySelector(".num");
const lightboxViews = document.querySelector(".img_lightbox");
const lightboxClose = document.querySelector(".img_lightbox-close");
const productInfo = document.querySelector(".product_info");
const cartInfo = document.querySelector(".cart_info");
const Total = document.querySelector(".total");
const cartNum = document.querySelector(".cart_no");

// To open the modal
const openModal = () => {
  document.querySelector(".img_lightbox").innerHTML += `
        <div class="img lightbox-img">
          <img class="main_light" src="images\\image-product-1.jpg" alt="">
        </div>
        <div class="circle1">
                <img class="prev" src="images\\icon-previous.svg" alt="">

        </div>
        <div class="circle2">
                <img class="next" src="images\\icon-next.svg" alt="">
        </div>

        <div class="lightbox-side_img">
          <div class="sideimg">
              <img class="light-side_img" onclick="switchImg(this)" src="images\\image-product-1-thumbnail.jpg" alt="">
              <div class="overlay active"></div>
          </div>
          <div class="sideimg">
              <img class="light-side_img" onclick="switchImg(this)" src="images\\image-product-2-thumbnail.jpg" alt="">
              <div class="overlay"></div>
          </div>
          <div class="sideimg">
          <img class="light-side_img" onclick="switchImg(this)" src="images\\image-product-3-thumbnail.jpg" alt="">
          <div class="overlay"></div>
          </div>
          <div class="sideimg">
          <img class="light-side_img" onclick="switchImg(this)" src="images\\image-product-4-thumbnail.jpg" alt="">
          <div class="overlay"></div>
          </div>
          <div onclick="modalClose()" class="img_lightbox-close">X</div>`;

  document.querySelector(".container").classList.add("new");
  lightboxViews.classList.add("active-lightbox");
  productInfo.classList.add("notshow");

  const prev = document.querySelector(".circle1");
  const next = document.querySelector(".circle2");
  let mainImage = document.querySelector(".main_light");
  let currentImageIndex = 1;

  // to update the main image when the side buttons are clicked
  function updateMainImage(currentImageIndex) {
    mainImage.setAttribute(
      "src",
      `images\\image-product-${currentImageIndex}.jpg`
    );
  }
  // side buttons
  prev.addEventListener("click", function () {
    console.log("clicked");
    currentImageIndex = currentImageIndex === 1 ? 4 : currentImageIndex - 1;
    updateMainImage(currentImageIndex);
  });

  next.addEventListener("click", function () {
    console.log("clicked");
    currentImageIndex = currentImageIndex === 4 ? 1 : currentImageIndex + 1;
    updateMainImage(currentImageIndex);
  });
};
// to swicth the main image when the side imgs are clicked
function switchImg(img) {
  let overlays = document.querySelectorAll(".overlay");
  overlays.forEach(function (overlay) {
    overlay.classList.remove("active");
  });
  console.log(img.parentElement)
  // Add 'active' class to the overlay of the clicked image's parent
  img.parentElement.querySelector(".overlay").classList.add("active");
}
function mainOverlay(img1) {
  let mainOverlays = document.querySelectorAll(".main_overlay");
  mainOverlays.forEach(function (mainOverlay) {
    mainOverlay.classList.remove("active");
  });
  console.log(img1.parentElement)
  // Add 'active' class to the overlay of the clicked image's parent
  img1.parentElement.querySelector(".main_overlay").classList.add("active");
}
function modalClose() {
  document.querySelector(".img_lightbox").innerHTML = ``;
  document.querySelector(".container").classList.remove("new");
  lightboxViews.classList.remove("active-lightbox");
  productInfo.classList.remove("notshow");
}
document.querySelector(".mob_text").style.display='none';
const openCart = () => {
  document.querySelector(".mob_cart").classList.add("active_cart");
  document.querySelector(".mob_cart").style.display='block'; 
  document.querySelector(".mob_text").style.display = "block";
  if (addCart()) {
    document.querySelector(".box").classList.add("active");
  }
  
};

const add = () => {
  if (numSpan) {
    let currentValue = parseInt(numSpan.textContent);
    numSpan.textContent = currentValue + 1;
  } else {
    console.error("Element with class 'num' not found");
  }
};
const sub = () => {
  if (numSpan) {
    let currentValue = parseInt(numSpan.textContent);
    numSpan.textContent = currentValue - 1;
  } else {
    console.error("Element with class 'num' not found");
  }
};
//  making the cart responsive
const addCart = () => {
  if (parseInt(numSpan.textContent)===0) {
    document.querySelector(".cart_content").innerHTML = 
      `<p class="lap_text">Your cart is empty.</p>`
    document.querySelector(".check_out").style.display='none';
  } else {
    document.querySelector(
      ".mob_cart-info"
    ).innerHTML = `<div class="mob_cart_content">
          <img src="images\\image-product-1.jpg" width="40px" height="40px" alt="">
    
          <div>
            <div class="mob_cart-content">
              <p>Fall Limited Edition Sneakers</p>
              <span class="mob_content">
                <p class="mob_cart_info">$125.00 x </p> <strong class="total"></strong>
              </span>
              <img class="del" src="images/icon-delete.svg" alt="">
            </div>
          </div>
        </div>
        <div class="mob_check_out mob_add_cart">Checkout
        </div>
      </div>`;   
  }
  cartInfo.textContent = `$125.00 x `;
  cartInfo.textContent += numSpan.textContent;
  let total = 125.0 * parseFloat(numSpan.textContent);
  Total.textContent = `$${total}`;
  cartNum.classList.add("num_active");
  cartNum.textContent = numSpan.textContent;
  return true;
};
// const menuBar = () => {
//   document.querySelector(".menu_mob").classList.add("menu_bar");
//   document.querySelector(".dim_js").classList.add("dim");
// }
// const closeMenu=()=>{
//   document.querySelector(".menu_mob").classList.remove("menu_bar");
//     document.querySelector(".dim_js").classList.remove("dim");
// }
const menuBar = () => {
  document.querySelector(".menu_mob").classList.add("menu_bar");
  document.querySelector(".dim_js").style.display = "block";
};

const closeMenu = () => {
  document.querySelector(".menu_mob").classList.remove("menu_bar");
  document.querySelector(".dim_js").style.display = "none";
};
const closeMobCart=()=>{
  document.querySelector(".mob_cart").style.display='none'; 
}