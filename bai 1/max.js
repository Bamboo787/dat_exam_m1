function equation(a,b,c){
if (a == 0)
    if (b == 0)
        if (c == 0) {
            console.log('phuong trinh co vo so nghiem')
        }
        else {
            console.log('phuong trinh vo nghiem')
        }
    else {
        console.log(`phuong trinh co nghiem: x = ${-c / b}`)
    }
else {
    let delta = b ** 2 - 4 * a * c;
    if (delta < 0) {
        console.log('phuong trinh vo nghiem')
    }
    else if (delta == 0) {
        console.log(`phuong trinh co nghiem kep: x1 = x2 = ${-b / (2 * a)}`)
    }
    else {
        console.log(`phuong trinh co 2 nghiem: x1 = ${(-b + Math.sqrt(delta)) / (2 * a)}; x2 = ${(-b - Math.sqrt(delta)) / (2 * a)}`)
    }
}
}
equation(8,12,-20);
