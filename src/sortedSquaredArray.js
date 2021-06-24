const sortedSquaredArray = (array) => array.map(element => Math.pow(element,2)).sort((a,b) => a - b );
console.log(sortedSquaredArray([-6,-4,1,2,3,5]));