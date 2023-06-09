const Slider = () => {
  //Elements
  const slideNext = document.querySelector("[data-next]"),
    slidePrev = document.querySelector("[data-prev]"),
    sliderLine = document.querySelector(".slider-line");

  //Function max and min offset
  function slider(next, prev, line) {
    let offset = 0;

    //Slide our slider to left
    function slideLeft() {
      offset += 935.17;

      if (offset > 2805.51) {
        offset = 0;
      }

      line.style.left = -offset + "px";
    }

    //Slide our slider to right
    function slideRight() {
      offset -= 935.17;

      if (offset < 0) {
        offset = 2805.51;
      }

      line.style.left = -offset + "px";
    }

    //EventListeners
    next.addEventListener("click", () => {
      slideLeft();
    });

    prev.addEventListener("click", () => {
      slideRight();
    });
  }

  slider(slideNext, slidePrev, sliderLine);
};

export default Slider;
