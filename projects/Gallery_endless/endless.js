window.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');

    randomSizeOfImg = (min, max) => {
        return Math.round(Math.random() * (max - min) + min);
    }

    addImg = () => {
        let img = document.createElement('img');
        let width = randomSizeOfImg(300, 640);
        let height = randomSizeOfImg(150, 480);
        img.setAttribute('src', `https://placeimg.com/${width}/${height}/tech`);
        container.appendChild(img);
    }

    for (let i = 0; i < 25; i++) {
        addImg();
    }

    window.addEventListener("scroll", (e) => {

        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            addImg();
        }
    });
});