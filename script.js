const mainWrapper = document.querySelector(".js-main-wrapper");
const popup = document.querySelector(".js-popup");
const popupButton = document.querySelector(".js-popup-button");
const carousel = document.querySelector(".js-carousel");
const carouselWrapper = document.querySelector(".js-carousel-wrapper");
const styles = {};

popupButton.addEventListener("click", togglePopup);

// Event functions
function togglePopup() {
  if (popup.classList.contains("inactive")) {
    popup.classList.remove("inactive");
    popup.classList.add("active");
  } else if (popup.classList.contains("active")) {
    popup.classList.remove("active");
    popup.classList.add("inactive");
  }
}

// Helper functions

// -- create toggle helper

/* Carousel 
- Move slides
-- tranform: translate(-80%)
-- How to start at the beginning again?

*/
window.addEventListener("resize", function (event) {
  let carouselWrapperWidth = carouselWrapper.clientWidth;

  // Determine existing padding. Refactor.

  let carouselWrapperPaddingLeft = window
    .getComputedStyle(carouselWrapper)
    .getPropertyValue("padding-left");
  console.log(carouselWrapperPaddingLeft);

  carouselWrapperPaddingLeft = parseInt(
    carouselWrapperPaddingLeft.substring(
      0,
      carouselWrapperPaddingLeft.length - 2
    )
  );
  console.log(carouselWrapperPaddingLeft);

  let carouselWrapperPaddingRight = window
    .getComputedStyle(carouselWrapper)
    .getPropertyValue("padding-right");

  carouselWrapperPaddingRight = parseInt(
    carouselWrapperPaddingRight.substring(
      0,
      carouselWrapperPaddingRight.length - 2
    )
  );

  const availableCarouselWidth =
    carouselWrapperWidth -
    carouselWrapperPaddingRight -
    carouselWrapperPaddingRight;

  const slidesDisplayNumber = Math.floor(availableCarouselWidth / 300);
  const carouselWidth = slidesDisplayNumber * 300;

  styles.carouselRule = `
    .carousel {
      width: ${carouselWidth}px;
    }
`;

  var styleSheet = document.createElement("style");
  styleSheet.setAttribute = ("type", "text/css");
  styleSheet.textContent = styles.carouselRule;
  document.head.appendChild(styleSheet);
});
