function addDeclaration (number1, number2) {
    const number1Square = number1 * number1;
    const number2Square = number2 * number2;
    const sum = number1Square + number2Square
    const sumSquare = sum*sum
    return sumSquare
}
console.log(addDeclaration(2,3))

const addExpression = function(number1, number2) {
    const number1Square = number1 * number1;
    const number2Square = number2 * number2;
    const sum = number1Square + number2Square
    const sumSquare = sum*sum
    return sumSquare
}
console.log(addExpression(2,3))

const addArrow = (number1,number2) => {
    const number1Square = number1 * number1;
    const number2Square = number2 * number2;
    const sum = number1Square + number2Square
    const sumSquare = sum*sum
    return sumSquare
}
console.log(addArrow(2,3))