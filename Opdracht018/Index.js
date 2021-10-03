const above18 = function(age) {
    if(age>= 18){return true} else{ return false}
}

console.log(above18(18))

const resultAge = function(age) {
    const checkAge = above18(age)
    if (checkAge) {return "Hello there"} else {return "Hey kiddo"}
}

console.log(resultAge(16))

const calculateVAT = function(baseprice, percentage) {
    const VAT = baseprice * percentage;
    return VAT
}

const totalPrice = function(baseprice, percentage) {
    const calculatePrice = calculateVAT(baseprice, percentage) + baseprice
    return calculatePrice
}

console.log(totalPrice(100,0.21))

const baseprice = function(totalprice, percentage) {
    const price = totalprice/(1+percentage)
    return price
}

const amountVat = function (totalprice, percentage) {
    const totalVat = totalprice - baseprice(totalprice, percentage)
    return [baseprice(totalprice,percentage), totalVat]
}

console.log(amountVat(121,0.21))