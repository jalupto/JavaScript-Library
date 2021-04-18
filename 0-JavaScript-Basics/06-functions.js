function pacersWon(){
    console.log("Pacers won!");
}
pacersWon();

function subtractTwoNumbers(firstNum,secondNum){
    console.log(firstNum - secondNum);
}

subtractTwoNumbers(5,7);

function fullName(first, last){
    let wholeName = first + " " + last;
    return wholeName;
}
console.log(fullName("Paul", "O'Connor"));

function calculatePriceIndiana(quantity, price){
    let totalPrice = 1.07 * quantity * price;
    return totalPrice;
}
console.log(calculatePriceIndiana(17,5));