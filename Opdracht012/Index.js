var age = 28

if (age >= 18 && age <25){
    console.log("Je krijgt 50% korting");
} else if(age < 18) {
    console.log("Helaas, we mogen jou niet binnen laten");}
    else (age>25)
    {console.log("Je mag naar binnen")}


var isFemale = false

if(isFemale){
    console.log("Wist je al van onze ladies night?");
} else {
    console.log("Jij bent helaas niet welkom op onze ladies night");
}

var driverStatus = "bob"
if(driverStatus =="bob"){
    console.log("Jij mag naar huis rijden")
} else{
    console.log("Vanavond wordt het een taxi voor jou")
}

const firstName = "Bram"

if (firstName == "Sarah" || firstName =="Bram") {
    console.log("Jij krijgt van ons een gratis biertje")
} else {console.log("Geniet van je avond bij ons")}

const totAmount = 153

if (totAmount >= 100) {
    console.log("Jij krijgt van ons een gratis flesje champagne")
} else if(totAmount > 50) {
    console.log("Jij krijgt een gratis portie nachos van ons!")
} else if (totAmount > 25) {
    console.log("Jij krijgt van ons gratis (vega)bitterballen.")
    } else { console.log("Geniet van je avond bij ons")}