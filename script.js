document.getElementById("offer-close") .onclick=function(){
    document.querySelector(".offer-bar").style.display="none"
}



  // Open sidenav
  document.getElementById("menubar").onclick = function () {
    document.getElementById("sidenav").style.right = "0";
  };

  // Close sidenav
  document.getElementById("closenav").onclick = function () {
    document.getElementById("sidenav").style.right = "-100%";
  };


  document.querySelectorAll(".heart-icon").forEach(function (icon) {
  icon.addEventListener("click", function () {
    this.classList.toggle("fa-regular"); // Outline heart
    this.classList.toggle("fa-solid");   // Filled heart
    this.style.color = this.classList.contains("fa-solid") ? "red" : "black";
  });
});




var sliderLeftButton = document.getElementById("slider-left-activate");
var sliderRightButton = document.getElementById("slider-right-activate");
var sliderImage = document.querySelector(".slider-image-container");

var sliderMargin = 0;
var slideWidth = 100;
var maxMargin = 200; // 3 images (0, 100, 200)

sliderRightButton.addEventListener("click", function () {
  sliderMargin += slideWidth;
  if (sliderMargin > maxMargin) {
    sliderMargin = 0;
  }
  sliderImage.style.marginLeft = `-${sliderMargin}vw`;
});

sliderLeftButton.addEventListener("click", function () {
  if (sliderMargin === 0) {
    sliderMargin = maxMargin;
  } else {
    sliderMargin -= slideWidth;
  }
  sliderImage.style.marginLeft = `-${sliderMargin}vw`;
});





const searchInput = document.querySelector(".search input");
const dressItems = document.querySelectorAll(".dress-list");

searchInput.addEventListener("keyup", function () {
  const value = searchInput.value.toUpperCase();

  dressItems.forEach(function (item) {
    const name = item.querySelector("h4").textContent.toUpperCase();

    if (name.includes(value)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});