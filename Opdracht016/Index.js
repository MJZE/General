const checkNumber = function(number){
    if(number > 100) {console.log(true)} else {console.log(false)}
}

checkNumber(20) //false
checkNumber(100) //false
checkNumber(101) //true

const clubEntrance = function(maxnumber, currentnumber, age) {
    if(maxnumber == currentnumber){
        console.log("It's too busy now, come back later")} 
        else if (currentnumber< maxnumber && age>= 18) {
            console.log("Come in")} 
            else{console.log("this is a club for adults")}
}

clubEntrance(100,90,12) //this is a club for adults
clubEntrance(100,90,18) // come in
clubEntrance(100,90,19)//come in
clubEntrance(100,100,18) //it's too busy now, come back later

const calculateAverage = function(number1, number2, number3, number4, number5) {
    console.log((number1 + number2 + number3 + number4 + number5)/5)
     
}
calculateAverage(1,2,3,4,5)