/* 
-----------------------
ARRAY
-----------------------
1. What is the purpose?
ans-
allows you to create highly responsive interfaces that improve the user experience and provide dynamic functionality

2. How to declare an array in JS
ans-
var numbers = [11, 22, 33, 44, 55];

3. Number of elements in an Array
ans-
var numbers = [11, 22, 33, 44, 55];
console.log(numbers.length);

4. What is index? 
ans- 
position number of an array element
index property reflects a number (n) such that (n 1) is the character where the first match starts.

5. Find the value of an element by index
ans-
var numbers = [11, 22, 33, 44, 55];
var valueOf = numbers[2];
console.log(valueOf);

6. Change an element by index
ans-
var numbers = [11, 22, 33, 44, 55];
numbers[2] = 66;
console.log(numbers);

7. get the index of an element by the value
ans-
var numbers = [11, 22, 33, 44, 55];
var findIndex = numbers.indexOf(33);
console.log(findIndex);

8. what does it mean when you get undefined while getting the value of an element by index
ans- 
A variable that has not been assigned a value is of type undefined 

9. How can you add an element to an array at the last position
ans-
var numbers = [11, 22, 33, 44, 55];
numbers.push(66);
console.log(numbers);

10. How can you remove the last element from array
ans-
var numbers = [11, 22, 33, 44, 55];
numbers.pop();
console.log(numbers);

11. Add an element at the first position of an array
ans-
var numbers = [11, 22, 33, 44, 55];
numbers.unshift(9);
console.log(numbers);

12. Remove the first element of an array
ans-
var numbers = [11, 22, 33, 44, 55];
numbers.shift();
console.log(numbers);

*/

// for check array
let friends = [1,2,3,4,5,6,7];
console.log(Array.isArray(friends));

// For checking the elements of array
console.log(friends.includes(5));

// For concat multiple array
let newFriends = [10,11,12,13];
let allFriends = newFriends.concat(friends);
console.log(allFriends);