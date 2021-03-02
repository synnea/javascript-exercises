//for-in

// forin loops access the keys of an object. To get the property, use bracket notation.

const person = {
    name: 'Mosh',
    age: 30
};

for (let key in person)
    console.log(key, person[key]);

const colors = ['red', 'green', 'blue'];

for (let index in colors)
    console.log(index, colors[index]);


// for-of FOR ARRAYS
for (let color of colors)
    console.log(color);