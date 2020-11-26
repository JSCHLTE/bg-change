/*
    Created By Jordan

    Website - https://codingJordan.github.io
    Twitter - https://twitter.com/jordanCoding
    YouTube - https://www.youtube.com/channel/UCpBrGERV1KaIGjsQPz8z2Wg
    GitHub - https://github.com/codingJordan
*/

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    //Randomly Generating an RGB Color.
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    //Randomly Generating an RGB Color.

    //Assigning colorChanger to "rng" rgb.
    const colorChanger = `rgb(${r}, ${g}, ${b})`;
    //Assigning colorChanger to "rng" rgb.

    //Applying color style to the body.
    document.body.style.background = colorChanger;
});
