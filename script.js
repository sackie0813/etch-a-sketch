// Makes a grid
const container = document.getElementById("container");

function makeGrid (rowNum) {
    for (let i = 0; i < rowNum; i++) {
        const row = document.createElement("div");
        row.className = "row"
        container.append(row); 
        for (let j = 0; j < rowNum; j++) {
            const tile = document.createElement("div");
            tile.className = "rowTile";  
            row.appendChild(tile);
        } 
    }
}

makeGrid(32);

// Handles changing background color on hover
const tileInGrid = document.getElementsByClassName("rowTile");
for (let i = 0; i < tileInGrid.length;i++ ) {
    tileInGrid[i].addEventListener("mouseover" , function() {
        tileInGrid[i].style.backgroundColor = "blue";
    });
}

// Reset button
const resetButton = document.createElement("resetButton");
resetButton.className = "resetButton";
resetButton.textContent = "reset";
resetButton.style.padding = "32px";
resetButton.style.border = "1px solid black";
resetButton.addEventListener("click" , function() {
    for (let i = 0; i < tileInGrid.length; i++) {
        tileInGrid[i].style.backgroundColor = "";
    }
});
document.body.appendChild(resetButton);

