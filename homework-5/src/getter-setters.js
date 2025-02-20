const person = {
    firstName: 'Mariana',
    lastName: 'Boiko',
    age: 34,

    // Getter for full name
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    // Setter to update the full name
    set fullName(name) {
        const parts = name.split(' ');
        if (parts.length === 2) {
            this.firstName = parts[0];
            this.lastName = parts[1];
        } else {
            console.log('Invalid full name format!');
        }
    },

    // Function to increase age
    increaseAge(years) {
        this.age += years;
        return `New age: ${this.age}`;
    }
};

// Using getters
console.log('Full Name:', person.fullName);

// Using setter to change name
person.fullName = 'Olga Smutna';
console.log('Updated Full Name:', person.fullName);

// Calling the function to manipulate the object
console.log(person.increaseAge(5));
