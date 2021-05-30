var container = document.querySelector(".container");

function makeNewGrid(){
   var newRows=window.prompt("Enter the no.of rows.");
   if(newRows>64){
       alert("Enter a value between 0-64");
       makeNewGrid();
   }
   else{
       clearGrid();
       makeGrid(newRows,newRows);
   }
}

var newGrid= document.createElement("button");
newGrid.classList.add("button-style");
newGrid.innerText="New"
container.parentNode.insertBefore(newGrid,container);
newGrid.addEventListener("click",makeNewGrid);

function changeColor(e){
    const randomR= Math.floor(Math.random()*251);
    const randomG= Math.floor(Math.random()*251);
    const randomB= Math.floor(Math.random()*251);
    e.target.style.backgroundColor= `rgb(${randomR},${randomG},${randomB})`;
}

function makeGrid(rows,cols){
    container.style.setProperty("--grid-rows",rows);
    container.style.setProperty("--grid-cols",cols);
    for(var i=0;i <(rows*cols);i++){
        var box= document.createElement("div");
        box.classList.add("square");
        // colorGrid=box.style.backgroundColor="black";
        box.addEventListener("mouseover",changeColor);
        container.appendChild(box)
    }

}
makeGrid(16,16);


function clearGrid(){
    const gridArray=Array.from(container.childNodes);
    gridArray.forEach((element) => {
        container.removeChild(element);
    })
}