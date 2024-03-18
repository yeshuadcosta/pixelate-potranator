// For the color palete on the right side of the grid
const rainbow = ["#FF0000","#FF7F00","#FFFF00","#00FF00","#0000FF","#4B0082","#9400D3","#FFFFFF","#000000","#ffdab9","#ffc0cb","#800080","#a52a2a","#ffd700","#808000","#008080","#00ffff","#808080","#c0c0c0"];
const colorPalete = document.querySelector("#colorPalete");
createColor();

// Default Construction of the grid
let size = 35;
const grid = document.querySelector("#grid");
createGrid();
const tranGrid = document.querySelector("#trans-grid");
createTransGrid();

let mode = "black";
let previous_mode = mode;
let ucolor = new Array(size*size);

for (let x = 0; x<ucolor.length; x++){
    ucolor[x] = "transparent";
}

function createColor() {
    for (let x = 0; x<rainbow.length; x++){
        var color = document.createElement("span");
        color.setAttribute("class","colour");
        color.style.background = rainbow[x];
        colorPalete.appendChild(color);

        color.addEventListener("click", () => {
            previous_mode = mode;
            mode = rainbow[x];
        });
    }
}

function createGrid() {
    for (let x = 1; x<=(size*size); x++){
        var box = document.createElement("div");
        box.setAttribute("class","box");
        box.style.height = (500 / size) + "px";
        box.style.width = (500 / size) + "px";
        grid.appendChild(box);
    }
    // Adding the Event Listener to add color to the grid
    ability();
}

function createTransGrid() {
    const temp = ["#ffffff","#cccccc"];
    let key = 0;
    for (let x = 1; x<=(size*size); x++){
        var tbox = document.createElement("div");
        tbox.setAttribute("class","tbox");
        tbox.style.height = (500 / size) + "px";
        tbox.style.width = (500 / size) + "px";
        tbox.style.background = temp[key];
        tranGrid.appendChild(tbox);
        if (key == 0)
            key++;
        else if (key == 1)
            key = 0;
    }
}

function destroyGrid() {
    var box = document.querySelectorAll(".box");

    for (let x = 0; x<(size*size); x++){
        grid.removeChild(box[x]);
    }
}

function destroyTransGrid() {
    var tbox = document.querySelectorAll(".tbox");

    for (let x = 0; x<(size*size); x++){
        tranGrid.removeChild(tbox[x]);
    }
}

function ability() {
    var box = document.querySelectorAll(".box");
    for (let x = 0; x<(size*size); x++){
        box[x].addEventListener("click", () => {
            box[x].style.background = mode;
            ucolor[x] = mode;
        });
    }
}

// Adding an Event Listener to change the size of the grid
document.querySelector("#changeSize").addEventListener("click", () => {
    console.log("Changing the size of the grid.");
    destroyGrid();
    destroyTransGrid();
    size = prompt("Enter the desired size for the grid");
    createGrid();
    createTransGrid();
});

// Adding an Event Listener for "Color Mode"
document.querySelector("#colorMode").addEventListener("click", () => {
    console.log("Activating Color Mode");
    mode = previous_mode;
});

// Adding an Event Listener for the eraser
document.querySelector("#eraserMode").addEventListener("click", () => {
    console.log("Activating Eraser Mode");
    previous_mode = mode;
    mode = "transparent";
});

// Adding an Event Listener to add colous to the colour palete
document.querySelector("#addColor").addEventListener("click", () => {
    var temp = prompt("Enter the hex code for the desired color");
    rainbow.push(temp);
    var color = document.createElement("span");
    color.setAttribute("class","colour");
    color.style.background = rainbow[rainbow.length - 1];
    colorPalete.appendChild(color);

    color.addEventListener("click", () => {
        previous_mode = mode;
        mode = rainbow[rainbow.length - 1];
    });
});

// Adding an Event Listener to clear the grid
document.querySelector("#clearMode").addEventListener("click", () => {
    console.log("Clearing the grid");
    destroyGrid();
    createGrid();
});