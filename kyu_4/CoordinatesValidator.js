
//URL https://www.codewars.com/kata/5269452810342858ec000951/train/javascript
//kyu: 4


function isValidCoordinates(coordinates){
    let bool = true;
    coordinates.split(', ').forEach((c, i) => {
        if (c.includes('-') && c.split('-')[0] !== '') {
            bool = false;
        } else if (c.split('.').length > 2) {
            bool = false;
        } else if (c.match(/[^\d.-]/g)) {
            bool = false;
        } else if ((i === 0 && (c > 90 || c < -90)) || (i === 1 && (c > 180 || c < -180))) {
            bool = false;
        }
    })
    return bool;
  }





  console.log(isValidCoordinates('-23, 25'), true);
  console.log(isValidCoordinates('24.53525235, 23.45235'), true);
  console.log(isValidCoordinates('04, -23.234235'), true);
  console.log(isValidCoordinates('43.91343345, 143'), true);
  console.log(isValidCoordinates('23.234, - 23.4234'), false);
  console.log(isValidCoordinates('6.873840571033707, 65-06925875391174'), false);
  console.log(isValidCoordinates('99.234, 12.324'), false);
  console.log(isValidCoordinates('N23.43345, E32.6457'), false);
  console.log(isValidCoordinates('-209.16567159704263, 2.231389679551029'), false);