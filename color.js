const color_change_btn = document.getElementById("color_change_btn");
const body = document.querySelector('body')
const colors = ['rgba(255, 99, 71, 0.8)', 'green', 'blue', 'rgb(106, 90, 205)', 'pink', 'purple', 'rgba(0,0,0,80%)', 'red', 'grey', 'rgb(139,0,139)'];

body.style.backgroundColor = "violet";

function backgroundChange() {
    color_change_btn.addEventListener("click", function () {
        const randomColor = parseInt(Math.random() * colors.length);
        body.style.backgroundColor = colors[randomColor];
    });
};
backgroundChange();

const uniqueNumber = [10, 12, 45, 85, 63, 55, 60];
color_change_btn.addEventListener("click", function () {
    const randomNumber = parseInt(Math.random() * uniqueNumber.length);
    console.log("randomNumber", randomNumber);
});

