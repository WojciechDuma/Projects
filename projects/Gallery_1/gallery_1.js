const showImage = () => {
    const allImg = [...document.querySelectorAll(".container img")];
    const show = document.querySelector(".show");
    const showImg = document.querySelector(".show img");
    allImg.forEach(img => {
        img.addEventListener("click", () => {
            show.classList.add("active");
            const imgSrc = img.getAttribute("src");
            showImg.setAttribute("src", imgSrc);
        });
    });

    show.addEventListener("click", () => {
        show.classList.remove("active");
    });
};

showImage();