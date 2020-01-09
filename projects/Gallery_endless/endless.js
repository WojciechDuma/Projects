window.addEventListener('DOMContentLoaded', () => {

    // Get the random size of image
    randomSizeOfImg = (min, max) => {
        return Math.round(Math.random() * (max - min) + min);
    }

    // Random categories. We can just use "any" in link, but in this way is more fun :)
    randomCategories = () => {
        const categories = ['animals', 'arch', 'nature', 'people', 'tech'];
        return categories[Math.floor(Math.random() * categories.length)];
    }

    // Adding image to page
    addImg = () => {
        const container = document.querySelector('.container');
        let img = document.createElement('img');
        let width = randomSizeOfImg(300, 640);
        let height = randomSizeOfImg(200, 480);
        img.setAttribute('src', `https://placeimg.com/${width}/${height}/${randomCategories()}`);
        container.appendChild(img);
    }

    // Initialization images
    for (let i = 0; i < 25; i++) {
        addImg();
    }

    // Adding new images when we scroll to the bottom of page
    window.addEventListener("scroll", (e) => {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            addImg();
        }
    });
});