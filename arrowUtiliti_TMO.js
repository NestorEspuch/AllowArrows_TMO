function arrowUtility() {
  const prebButtonSelector = document.querySelector("#app > section:nth-child(6) > div > div.col-6.col-sm-2.order-1.order-sm-1.chapter-arrow.chapter-prev > a > small");
  const nextButtonSelector = document.querySelector("#app > section:nth-child(6) > div > div.col-6.col-sm-2.order-2.order-sm-3.chapter-arrow.chapter-next > a > small");

  document.addEventListener("keydown", function (event) {
    if (event.key == 'ArrowLeft') {
      prebButtonSelector.click();
    }
    if (event.key == 'ArrowRight') {
      nextButtonSelector.click();
    }
  });
}

arrowUtility();