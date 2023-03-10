let container = document.querySelector("#container");

const newGrid = document.createElement('button');
newGrid.innerHTML = "New Grid";
container.appendChild(newGrid);

const reset = document.createElement('button');
reset.innerHTML = "Reset";
reset.className = ('reset');
reset.addEventListener('click', () =>{
  location.reload();
})
container.appendChild(reset);

let sketchArea = document.createElement('div');
container.appendChild(sketchArea);
sketchArea.classList.add('sketchBody');

let rows = document.getElementsByClassName('gridRow');
let row;
let colum;







newGrid.addEventListener('click', ()=>{
  let userRows = prompt('how many rows');
  if (userRows < 5 || userRows > 100){
    alert('INVALID INPUT')
  }else{
    makeRows(userRows);
  }
    let userColums = prompt('how many colums');
    if (userColums < 5 || userColums > 100){
      alert('INVALID INPUT ')
    }else{
      makeColums(userColums);
    }
});



function makeRows(numRows){
  for (r=0; r < numRows; r++){
    let row = document.createElement('div');
    sketchArea.appendChild(row).className = 'gridRow';
  }
}

  function makeColums(cellNum){
    for (i = 0; i < rows.length; i++){
      for (c = 0; c < cellNum; c++){
        let newCell = document.createElement('div');
        newCell.addEventListener('mouseover', () => {
          newCell.style.backgroundColor = 'black';
      });
          rows[c].appendChild(newCell).className = ('cell');
      }
    }
  }









