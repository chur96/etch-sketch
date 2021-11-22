function resetGrid(){
    squares.forEach(square => square.classList.remove('filled'));
    squareCount = prompt('How many squares?', 100);
    console.log(squareCount);
    buildGrid(squareCount);
}

function buildGrid(squareCount = 16){

    let sqWidth = sketchGrid.offsetWidth / Math.sqrt(squareCount);
    let sqHeight = sketchGrid.offsetHeight / Math.sqrt(squareCount);

    if (squareCount > 10000){
        squareCount = 10000;
    }

    if (document.querySelectorAll('.square').length > 0){ 
        squares.forEach(square => sketchGrid.removeChild(square))
    };

    for (let i = 0; i < squareCount; i++){
        const div = document.createElement('div');
        div.classList.add('square')
        div.setAttribute('style', `height: ${sqHeight}px; width: ${sqWidth}px;`)
        sketchGrid.appendChild(div);
    }
    squares = document.querySelectorAll('.square');

    
    squares.forEach(square => {

        square.addEventListener('mouseover', function(e){
            
            square.classList.add('filled')
        });
    }); 
} 

let squares; 
const sketchGrid = document.querySelector('.sketchGrid'); 
const reset = document.querySelector('.reset');
reset.addEventListener('click', resetGrid);
 

buildGrid(16**2);