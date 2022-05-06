let string_value = "Trinh Bui Ba Dat";
let arr_value = string_value.split("");
function countCharacter(arr) {
    let count = 0;
    let arr_character = ['a', 'o', 'e', 'u', 'i'];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr_character.length; j++) {
            if (arr[i].toLowerCase() == arr_character[j]) {
                count++;
            }
        }
    }
    if (count != 0) {
        return count;
    } else {
        return false;
    }
}
console.log(countCharacter(arr_value));