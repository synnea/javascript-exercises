// Address Objct with 3 properties
// create a function named showAddress to show keys and values

const myAddress = {
    street: 'Mitterweg',
    city: 'Berlin',
    zipCode: 12049
};

const showAddress = (address) => {
    for (let key in address)
        console.log(key, address[key])
};

showAddress(myAddress);


// Factory and Constructor Functions for the address object

function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
}

// DON'T FORGET TO RETURN

function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

// DON'T FORGET TO USE SEMICOLONS WITHIN THE CONSTRUCTOR


// Object Equality

let address1 = new Address('a', 'b', 'c');
let address2 = new Address('a', 'b', 'c');

function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

// check if the properties of two objects are the same

function areEqual(address1, address2) {
    areEqual = true;
    for (let key in address1) 
        if (address1[key] !== address2[key])
            areEqual=false;
    return areEqual;
}

areEqual(address1, address2);


// check if the two objects point to the same address in memory

function areSame(address1, address2) {
    if (address1 === address2) return true;
    return false;
}

areSame(address1, address2);



// Blog Post object

let post = {
    title: 'Post',
    body: 'Some awesome text',
    author: 'me',
    views: 230,
    comments: [
        { author: 'myNemesis', body: 'you suck' },
        { author: 'myBFF', body: 'you rule'},
    ],
    isLive: true
};

function DraftPost(title, body, author) {
    this.author = author;
    this.body = body;
    this.title = title;
    this.views = 0;
    this.comments = [];
    this.isLive = false
}
