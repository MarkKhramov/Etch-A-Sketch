totalPx = 960;

function createBlocks(num)
{
    var container = document.getElementById("container");
    var sideLength = totalPx/num;
    container.setAttribute("style","display:grid;  grid-template-columns: repeat(" + num +"," + sideLength + "px); grid-template-rows: repeat(" + num + "," +sideLength +"px);");
    
    var block;

    for(let i = 0; i < (num*num); i++)
    {
        block = null;
        block = document.createElement("div");
        block.setAttribute("class", "blck");
        block.setAttribute("style", "height:" + sideLength + "px;" + " " + "width:" + sideLength + "px;");
        container.appendChild(block);
        
    }
   
    const blockArray = Array.from(container.getElementsByClassName("blck"));
    console.log(blockArray.length);
    
    blockArray.forEach(blck => blck.addEventListener('mouseover', () => blck.setAttribute("class", "blck blocks")));

}



createBlocks(100)