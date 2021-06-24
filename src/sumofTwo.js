function sumOfTwo(a,b,v) {
    const hashSet = new Set();
    a.forEach(element => {
        let complement = v - element;
        hashSet.add(complement);
    });
    
    for (const element of b) {
        if(hashSet.has(element)) return true;
    }

    console.log(hashSet);
    return false;
}

const a = [0,0,-5,30212];
const b = [-10,40,-3,9];

console.log(sumOfTwo(a,b,-8));