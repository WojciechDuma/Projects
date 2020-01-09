const gallery = () => {
  const sliderGallery = [...document.querySelectorAll(".gallery img")];
  const next = document.querySelector(".nextBtn");
  const prev = document.querySelector(".prevBtn");
  let counter = 1;

  const opacity = () => {
    sliderGallery.forEach(img => {
      img.style.opacity = 0;
      img.style.transition = `opacity 0.7s ease-in-out`;
    });
    sliderGallery[0].style.opacity = 1;
  };

  next.addEventListener("click", () => {
    if (counter < sliderGallery.length) {
      sliderGallery[counter].style.opacity = 1;
      counter++;
    } else {
      opacity();
      counter = 1;
    }
  });

  prev.addEventListener("click", () => {
    if (counter == 1) {
      sliderGallery.forEach(img => {
        img.style.opacity = 1;
      });
      counter = sliderGallery.length;
    } else {
      counter--;
      sliderGallery[counter].style.opacity = 0;
    }
  });

  opacity();
};

gallery();
