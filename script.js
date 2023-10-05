function decimalToBinary(num) {
let arr = [];
    while(num>0){
        let b = num%2;
       num = Math.floor(num/2)
       arr.push(b)
    }
     arr.reverse();
	let str = arr.join("")
    return str;
}
window.decimalToBinary = decimalToBinary;
