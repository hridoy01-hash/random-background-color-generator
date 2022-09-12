const color_change_btn = document.getElementById("color_change_btn");
const body = document.querySelector('body')
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple','rgba(0,0,0,80%)'];

body.style.backgroundColor = "violet";

function backgroundChange() {
    color_change_btn.addEventListener("click", function () {
        const randomColor = parseInt(Math.random() * colors.length);
        console.log("randomColor", randomColor);
        body.style.backgroundColor = colors[randomColor];
    });
};
backgroundChange();

