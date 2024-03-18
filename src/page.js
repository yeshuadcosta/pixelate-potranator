let uName = localStorage.getItem("name");
let uTheme = localStorage.getItem("theme");
let ucolor = JSON.parse(localStorage.getItem("ucolor"));

document.querySelector("#back-image").style.backgroundImage = "url(" + uTheme + ")";

let size = 35;
const grid = document.querySelector("#grid");
createGrid();

function createGrid() {
    for (let x = 0; x<(size*size); x++){
        var box = document.createElement("div");
        box.setAttribute("class","box");
        box.style.height = (80 / size) + "vh";
        box.style.width = (80 / size) + "vh";
        box.style.background = ucolor[x];
        console.log(ucolor[x]);
        grid.appendChild(box);
    }
}

// Displaying the name of the user on the page
document.querySelector("#name").innerHTML = "This is " + uName;

// Dsiplaying a random quote
let quote = [
    "If something's important enough, you should try. Even if the probable outcome is failure.",
    "The people who are crazy enough to think they can change the world are the ones who do.",
    "If you can't make it good, at least make it look good.",
    "You don't need to have extraordinary effort to achieve extraordinary results. You just need to do the ordinary, everyday things exceptionally well.",
    "Any man can learn anything he will, but no man can teach except to those who want to learn."
];
let quoteA = [
    "Elon Musk",
    "Steve Jobs",
    "Bill Gates",
    "Warren Buffet",
    "Henry Ford"
];
let index = Math.floor(Math.random() * quoteA.length);

document.querySelector("#quote").innerHTML = quote[index] + "<br />" + "~" + quoteA[index];