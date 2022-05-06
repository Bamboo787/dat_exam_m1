let number = 2;
let arr = [1, 2, 3, 4, 5];
function searchElement(arr, number) {
    let index;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == number) {
            index = i;
            break;
        }
    }
    if (index >= 0) {
        console.log(`Phần tử nhập vào nằm ở vị tri thứ: ${index}`);
    } else {
        console.log("không tìm thấy phần tử trong mảng");
    }
}
searchElement(arr, number);