
const container = document.querySelector("#container");

container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.border = "2px solid black";
container.style.margin = "30px";

const grid = document.querySelector("#grid");

grid.style.cssText = 
"display: flex; flex-wrap: wrap; border: 2px solid black; width: 500px; height: 500px";


// const squareDiv = document.createElement("div");

// squareDiv.style.display = "flex";
// squareDiv.id = "hover";
// squareDiv.style.height = 16px;
// squareDiv.style.border = "thick solid black";


const gridDimensions = 16 * 16;

for(let i = 0; i < gridDimensions; i++){
    const gridBox = document.createElement("div");
    gridBox.id = "hover";
    gridBox.style.cssText= "flex: 1 1 5.3%; border: 2px solid red; background-color: blue; id: hover";
    grid.appendChild(gridBox);

}


// for(let i = 0; i < 16;i++){
//     for(let j = 0; j < 16;j++){

//     }
//     const div = document.createElement("div");

// }

// container.appendChild(squareDiv);


const etch = document.querySelector("#hover");

etch.addEventListener("mouseover", (e) => {
    etch.style.backgroundColor = "black";
})
