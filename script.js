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

makeGrid(16);

// Handles changing background color on hover
const tileInGrid = document.getElementsByClassName("rowTile");
for (let i = 0; i < tileInGrid.length;i++ ) {
    tileInGrid[i].addEventListener("mouseover" , function() {
        tileInGrid[i].style.backgroundColor = "blue";
    });
}