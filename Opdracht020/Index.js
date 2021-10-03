const colors = ["yellow", "blue", "red", "orange"]
let i=0

while (colors[i]) {
    console.log(colors[i])
    i++
}


for (i=0; i<colors.length; i++) {
    console.log(colors[i])
}

colors.forEach(element => console.log(element))

/* while loop = 
for loop = 
array heeft als voordeel makkelijk het element te definiëren
Zie hieronder
*/
const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    age: 25,
    dob: '08/02/1989',
    active: true
};

// iterate over the user object
for (const key in user) {
    console.log(`${key}: ${user[key]}`);
}