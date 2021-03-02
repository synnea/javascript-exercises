//Cloning objects


const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

// old approach:

const another = {};
for (let key in circle)
    another[key] = circle[key];


// object assign method

Object.assign({}, circle);

// you can also add additional properties, like

Object.assign({
    color: 'yellow'
}, circle)


// spread operator

const another = {... circle};



// String Objects

// check if a string includes a substring

message.includes('somstring');

// returns the index of a substring

message.indexOf('my')

// remove whitespace

message.trim();


// Template Literals using `` as a way to get rid of escape chars
// and use variables.

const name = "John";

const another = `Hi ${name}`;

// Date

now.toDateSring();

now.toTimeString();

// common way to send data to a backend

now.toISOString(); 