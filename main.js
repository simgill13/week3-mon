
//NUMBER ONE 

// const arr = [11, 12, 23, 35, 58, 93];
// let toFind = 35;

// for (i=0; i<arr.length; i++) {
//     item = arr[i];
//     if (item === toFind) {
//         break;
//     }
// };

// console.log('Found item at position', i);

// arr.push(arr[arr.length - 1] + arr[arr.length - 2]);







// number 2

function createArray(items) {
    items = items || 10;
    let arr = [];
    for (let i=0; i<items; i++) {
        arr.push(i);
    }
    return arr;
}

let arr = createArray();

arr = arr.filter(function(item) {
    return item < 40;
});

arr = arr.map(function(item) {
    return item * 2;
});

arr.forEach(function(item, index) {
    console.log('Index:', index);
    console.log('Item:', item);
});