const container = document.getElementById("container");

// Makes a grid
function makeGrid (size) {
    for (let i = 0; i < size * size; i++) {
        const gridTile = document.createElement("div");
        gridTile.classList.add("tile");
        container.appendChild(gridTile);
        gridTile.style.width =(480/size) + "px"; //480px Since container borders add up to be 20
        gridTile.style.height = (480/size) + "px";
        // Handles changing color to blue when mouse is over
        gridTile.addEventListener ("mouseover" , function() {
            gridTile.style.backgroundColor = "blue";
            
        });
    }
}

// Handles dimensions of the tiles, removes all tiles and replaces with new ones
const sizeButton = document.createElement("button");
sizeButton.classList.add("sizeButton");
sizeButton.textContent = "Change Dimensions";
document.body.appendChild(sizeButton);
sizeButton.addEventListener ("click" , function() {
    let item = document.getElementsByClassName("tile") 
    while (item[0]) { // While existing tiles exist, remove the first until none exist
        item[0].parentNode.removeChild(item[0]);
    }
    const size = prompt("Enter desired dimensions between 1-100");
    if (size < 1 || size > 100 || size === null) {
        alert("You have entered an invalid number");
        makeGrid(1);
    } else {
        makeGrid(size);
    }
});

const resetButton = document.createElement("button");
resetButton.classList.add("reset");
resetButton.textContent = "Reset";
resetButton.addEventListener("click", function(){
    const item = document.getElementsByClassName("tile");
    for (let i = 0; i < item.length; i++) {
        item[i].style.backgroundColor = "";
    }
});
document.body.appendChild(resetButton);


makeGrid(16);