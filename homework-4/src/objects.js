const person = {
    name: 'Mariana',
    age: 34,
    address: {
        city: 'Vienna',
        zip: '10001'
    },
    hobbies: ['reading', 'traveling', 'testing'],
    greet: function () {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

// Display different object values
console.log(person.name);
console.log(person.address.city);
console.log(person.hobbies[2]);

// Call the greet method
person.greet();
