const array = [1,4,5,7,2,5,1,4,7,8,4,9,2,11];
let count = 0;

function linearSearch(arr, item) {
    for (let i = 0; i < array.length; i++) {
        count += 1
        if (arr[i] === item) {
            return i
        }
    }
    return null
}

console.log(linearSearch(array, 11));
console.log(count)