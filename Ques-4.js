
// Extract all keys inside address object from user object using destructuring ?

// const user = { firstName: ‘Sahil’, lastName: ‘Dua’, Address: { Line1: ‘address line 1’, Line2: ‘address line 2’, State: ‘Delhi’, Pin: 110085, Country: ‘India’, City: ‘New Delhi’, }, phoneNo: 9999999999 }

const user = {
    firstName: 'Sahil',
    lastName: 'Dua',
    Address: {
        Line1: 'address line 1',
        Line2: 'address line 2',
        State: 'Delhi',
        Pin: 110085,
        Country: 'India',
        City: 'New Delhi',
    }
    , phoneNo: 9999999999
};


let Address = { ...user.Address };
console.log("Address =", Address);

let { Line1, Line2, State, Pin, Country, City } = Address;

console.log(Line1);
console.log(Line2);
console.log(State);
console.log(Pin);
console.log(Country);
console.log(City);




