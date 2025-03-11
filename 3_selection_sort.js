const array = [0,4,6,1,3,8,6,4, -4, -56, 43, 14, 67, -8];
let count = 0;

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let index = i;
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] < arr[index]) {
                index = j
            }
            count += 1
        }
        let tmp = arr[i]
        arr[i] = arr[index]
        arr[index] = tmp
    }
    return arr
}

console.log(selectionSort(array))
console.log(array.length)
console.log('count: ', count);