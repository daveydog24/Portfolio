
let example = [3, 1, -20, 8, 7, 4, 11, -3];

function findNearestSum(num, array){
    let closestSum = 999999999999999;
    let closestNum = array[0];

    for(let i = 0; i < array.length; i++){
        if (array[i] === num){
            return array[i];
        }
        if (array[i] > num){
            if (array[i] - num < closestSum) {
                closestNum = array[i];
                closestSum = array[i] - num;
            }
        } else {
            if (num - (array[i]) < closestSum){
                closestNum = array[i];
                closestSum = num - (array[i]);
            }
        }
    }
    return closestNum;
}

console.log(findNearestSum(6, example));