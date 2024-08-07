const container = document.getElementById("container");

function makeRow (rowNum) {
    for (let i = 0; i < rowNum; i++) {
    let row = document.createElement("div");
    container.appendChild(row).className = "gridRows";
    }
}

makeRow(5);
