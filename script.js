const container = document.getElementById("container");

//Makes a grid
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