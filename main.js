
//NUMBER ONE 

// const arr = [11, 12, 23, 35, 58, 93];
// let toFind = 35;

// for (i=0; i<arr.length; i++) {
//     let item = arr[i];
//     if (item === toFind) {
//         break;
//     }
    
 
// };

// console.log('Found item at position', i);

// arr.push(arr[arr.length - 1] + arr[arr.length - 2]);







// number 2

// function createArray(items) {
//     items = items || 10;
//     let arr = [];
//     for (let i=0; i<items; i++) {
//         arr.push(i);
//     }
//     return arr;
// }

// let arr = createArray();

// arr = arr.filter(function(item) {
//     return item < 40;
// });

// arr = arr.map(function(item) {
//     return item * 2;
// });

// arr.forEach(function(item, index) {
//     console.log('Index:', index);
//     console.log('Item:', item);
// });

// ES6 Number 2

// const createArray = (items) => {
//     items = items || 10;
//     let arr = [];
//     for (let i = 0; i < items; i++) {
//         arr.push(i);
//     }
//     return arr;
// }

// let arr = createArray(200);

// arr = arr.filter(item => item < 40)
//          .map(item => item * 2)
//          .forEach((item, index) => {
//             console.log('Index:', index);
//             console.log('Item:', item);
//     });



//  number 3 

// const obj1 = {
//     foo: 'bar',
//     zip: 'zap'
// };

// const obj2 = {
//     alice: 'sender',
//     bob: 'receiver',
//     eve: 'eavesdropper'
// };

// const obj3 = {
//     satya: 'microsoft',
//     tim: 'apple',
//     marissa: 'yahoo',
//     sundar: 'google',
//     mark: 'facebook'
// }

// let newObject = Object.assign({}, obj1, obj2, obj3);



// let {foo, zip, alice,bob,eve,satya,tim,marissa,sundar,mark} = newObject;

// console.log(foo, zip, alice,bob,eve,satya,tim,marissa,sundar,mark);

// const newObj1 = {foo, zip};
// console.log(newObj1);
// const newObj2 = {alice,bob,eve};
// console.log(newObj2);
// const newObj3 = {satya,tim,marissa,sundar,mark};
// console.log(newObj3);




//  number 4 

function rectToCorners(x, y, width, height) {
    const topLeft = [x, y];
    const topRight = [x + width, y];
    const bottomLeft = [x, y + height];
    const bottomRight = [x + width, y + height];
    return [].concat(topLeft,topRight, bottomLeft, bottomRight);
};

const position = [10, 20];
const size = [5, 5];

console.log(rectToCorners(...position, ...size));



















