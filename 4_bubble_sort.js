const array = [1,4,23,7,6,3,7,2,5,77,8,99,666,4,3,222,4,5,66,2,5,1,4,7,8,4,9,2,11];
let count = 0;

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j+1] < arr[j]) {
                let tmp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = tmp
            }
            count += 1
        }
    }
    return arr
}

console.log(bubbleSort(array))
console.log(array.length)
console.log('count: ', count);