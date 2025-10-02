let people = ["Greg","Mary","Devon","James"];

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}

people.forEach(function(person){
    console.log(person);
});

people.shift();
console.log(people);

people.pop();
console.log(people);

people.unshift("Matt");
console.log(people);

people.push("Marco");
console.log(people);

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Mary"){
        break;
    }
}

let copy = people.slice(2, people.length);
console.log(copy);

people = ["Greg","Mary","Devon","James"];
people.splice(2,1,"Elizabeth","Artie"); 
people.shift(); 
people.unshift("Matt"); 
people.pop(); 
people.push("Marco"); 
console.log(people);

let withBob = people.concat("Bob");
console.log(withBob);
