const array = [1,4,23,7,6,3,7,2,5,77,8,99,666,4,3,222,4,5,66,2,5,1,4,7,8,4,9,2,11];
let count = 0;

function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }
    let pivotIndex = Math.floor(array.length / 2);
    let pivot = array[pivotIndex];
    let less = []
    let greater = []

    for (let i = 0; i < array.length; i++) {
        count += 1;
        if (i === pivotIndex)
            continue
        if(array[i] < pivot ) {
            less.push(array[i])
        }
        else {
            greater.push(array[i])
        }
    }
    return [...quickSort(less), pivot, ...quickSort(greater)];
}

console.log(quickSort(array))

console.log(array.length)
console.log('count: ', count);