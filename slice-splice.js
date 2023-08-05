// how to cut a part of an array
// slice don't change the main array
const friends = [11,22,33,44,55,66,77,88,99]
const part = friends.slice(2, 5);
console.log(part);

// splice delete a part of an array

const friends2 = [11,22,33,44,55,66,77,88,99]
const part2 = friends2.splice(2, 3);
console.log(part2);
console.log(friends2);


/*
Slice-
var friends = ["Alif", "Alif Alamin", "Azizul", "Monirul", "Aminul"]
console.log(friends.slice(0,4));

include-
var singer = "Ariana grande is singing";
console.log(singer.includes("grande"));



subtraction-
var singer = "Ariana grande is singing";
console.log(singer.substring(0,8));
*/