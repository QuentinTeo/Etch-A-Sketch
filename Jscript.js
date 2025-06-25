
const container = document.querySelector("#container");

container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.border = "2px solid black";
container.style.margin = "30px";

//Grid 
const grid = document.querySelector("#grid");

grid.style.cssText = 
"display: flex; flex-wrap: wrap; border: 2px solid black; width: 500px; height: 500px; align-self: center; justify-self: center";

createGrid(16);

//Initial Experiment on 'etching'
// const etch = document.querySelector(".hover");

// etch.addEventListener("mouseover", (e) => {
//     etch.style.backgroundColor = "black";
// })

//Buttons

//Change Grid
let btn = document.querySelector(".btn");

btn.addEventListener("click",(e) => {
    let size = prompt("Number of squares per side?","16");

    if(size > 100){
        alert("Maximum size is 100 per side!");
        size = 100;
    }

    let delChild = document.querySelectorAll(".hover");

    for(let i = 0; i < delChild.length;i++){
        delChild[i].remove();
    }

    createGrid(size);

})



function createGrid(size){

    let percentage = (((500/size)-4) * (1/500)) * 100;
    let totalbox = size * size;

    for(let i = 0; i < totalbox; i++){
        const newGridBox = document.createElement("div");
        //realise i needed this function to add classes to elements
        newGridBox.classList.add("hover");
        newGridBox.style.cssText= "border: 2px dotted grey;";
        newGridBox.style.flex = 1;
        newGridBox.style.flexBasis = percentage+"%"; 
        grid.appendChild(newGridBox);
    
    }

    //adding the event listeners
    let etch = document.querySelectorAll(".hover");

    let opac = 0;

    // background-color: "rgb(" + R + ", " + G + ", " + B +")";

    //for loop to add events for all gridboxes
    for(let i = 0;i < etch.length;i++){
        etch[i].addEventListener("mouseover", (e) => {

            // changes to random color per interation
            let R =Math.floor(Math.random() * 255) + 1
            let G =Math.floor(Math.random() * 255) + 1
            let B =Math.floor(Math.random() * 255) + 1
            etch[i].style.backgroundColor = "rgb(" + R + ", " + G + ", " + B +")";
            
            opac += 0.1; 
            etch[i].style.opacity = opac;
        })
    }
}

