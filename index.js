const xCells = 50;
const yCells = 20;

const array2d = [];

for (var i = 0; i < yCells; i++) {
  array2d[i] = [];
  for (var j = 0; j < xCells; j++) {
    do {
      array2d[i][j] = getRandom('O#');
    } while (!array2d[i][j]);
  }
}

function getRandom(string) {
  let random;
  do {
    random = string.split('')[Math.round(Math.random() * string.length - 1)];
  } while (!random);

  return random;
}

console.log(array2d);

function indexCreate(yCells, xCells, i, j) {
  let yLen = yCells.toString().length;
  let xLen = xCells.toString().length;
  return `${addZeros(i + 1, yLen)}${addZeros(j + 1, xLen)}`;
}

function addZeros(num, len) {
  num = num.toString();
  while (num.length < len) num = '0' + num;
  return num;
}

///////////////////////////////////
function renderArray(array) {
  const root = document.querySelector('body');

  const field = document.createElement('div');
  field.classList.add('container');
  const listY = document.createElement('ul');
  listY.classList.add('y-list');

  for (let i = 0; i < yCells; i++) {
    const listX = document.createElement('ul');
    listX.classList.add('x-list');
    const itemY = document.createElement('li');

    for (let j = 0; j < xCells; j++) {
      const item = document.createElement('li');
      item.classList.add('item');

      item.id = indexCreate(yCells, xCells, i, j);
      listX.append(item);
    }

    itemY.append(listX);
    listY.append(itemY);
  }

  field.append(listY);
  root.append(field);
}

renderArray(array2d);

///////////////////////////////////
const fieldRef = document.querySelector('.y-list');
fieldRef.addEventListener('mousedown', e => {
  const startId = e.target.id;
  document.getElementById(startId).classList.toggle('hovered');
  // setInterval(move, 500, startId); // random drawing
});

// function move(startId) {
//   let nextMove = Number.parseInt(getRandom('123456789'));
//   let nextId;
//   switch (nextMove) {
//     case 1:
//       nextId = startId - 101;
//       console.log('startId: ', startId);
//       console.log('nextId: ', nextId);
//       break;
//     case 2:
//       console.log('case 2');
//       break;
//     case 3:
//       console.log('case 3');
//       break;
//     case 4:
//       console.log('case 4');
//       break;
//     case 5:
//       // no move
//       break;
//     case 6:
//       console.log('case 6');
//       break;
//     case 7:
//       console.log('case 7');
//       break;
//     case 8:
//       console.log('case 8');
//       break;
//     case 9:
//       console.log('case 9');
//       break;
//   }
//   console.log(nextMove);
// }
