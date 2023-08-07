// Problem-1------------------
/*
তোমাকে এমন একটা ফাংশন বানাতে হবে যেটা একটি সংখ্যা ইনপুট নিবে। function টির নাম হবেঃ isInteger()। আউটপুট হিসেবে একটি boolean রিটার্ন করবেঃ
সংখ্যাটি integer হলে true রিটার্ন করবে। 
অন্যথায় false রিটার্ন করবে।


function isInteger(number){
    if(number % 1 === 0){
        return true;
    }
    else{
        return false;
    }
}
const myNumber = isInteger(2.5)
console.log(myNumber);
*/

// Problem-2------------------
/*
ফাংশন নেম দিতে হবে isJavaScriptFile । এই ফাংশনে প্যারামিটার হিসেবে নিবে একটি স্ট্রিং(String) যেটি হবে একটি ফাইল নেম (যেমনঃ ‘index.js’)। যদি এটি জাভাস্ক্রিপ্ট ফাইল হয় তোমাকে true রিটার্ন করতে হবে আর যদি না হয় তাহলে false রিটার্ন করতে হবে 

function isJavaScriptFile(string){
    if(typeof string !== "string"){
        return "Please provide string type value";
    }
    else if(string.endsWith(".js") === true){
        return true;
    }
    else{
        return false;
    }

}
const fileName = isJavaScriptFile("script.html");
console.log(fileName);

2nd type ------------------------------

function isJavaScriptFile(fileName){
    if(typeof fileName !== "string"){
        return "please provide me a valid number"
    }
    else{
        const arr = fileName.split(".");
        const lastName = arr.pop();
        if(lastName === "js"){
            return true;
        }
        else{
            return false;
        }
    }

}
console.log(isJavaScriptFile("hello.js"));
*/




// Problem-3-------------------
/*
তোমাকে একটা function দেওয়া হবে called mindGame(” যা ইনপুট হিসেবে একটা positive number নিবে।")
এখন তোমার task : তোমাকে সেই নাম্বার এর সাথে 3 গুন করে, তারপর 10 যোগ করে, তারপর 2 দিয়ে ভাগ করে, তারপর 5 বিয়োগ করে, যা আউটপুট আসবে তা return করতে হবে
Sample Input & Output
Input: 5
Output: 7.5


function mindGame(positiveNumber){
    if(typeof positiveNumber !== "number" || positiveNumber <= 0){
        return "Please provide a positive number greater than 0"
    }
    else{
        let result = (positiveNumber*3+10)/2 -5;
        return result;
    }
    
}
const inputNumber = mindGame(5)
console.log(inputNumber);
*/


// Problem-4-------------------
/*
তোমাকে একটা function দেওয়া হবে called “isLGSeven()”. এটা ইনপুট হিসেবে একটা number নিবে।  
এখন তোমার task: তোমাকে ইনপুট ভ্যালু এবং ৭ এর মধ্যে পার্থক্য বের করতে হবে। যদি এই পার্থক্য ৭ এর চেয়ে ছোট হয়, তখন তোমাকে return করতে হবে সেই বিয়োগফল। নাহলে তোমাকে return করতে হবে double of the input। মানে যে সংখ্যা ইনপুট হিসেবে নিয়েছো সেটির দ্বিগুণ।
Input : 6
Output: -1
Input: -15
Output: -22
Input: 15
Output: 30


function isLGSeven(number){
    if(typeof number !== "number"){
        return "Please provide a number";
    }
    else{
        const myNumber = number - 7;
        if(myNumber< 7){
            return myNumber;
        }
        else{
            let myNumber2 = number*2;
            return myNumber2;
        }
    }
}
const inputNumber = isLGSeven(15)
console.log(inputNumber);
*/


// Problem-5-------------------
/*
তোমাকে একটা function দেওয়া হবে called findingBadData(). এটা ইনপুট হিসেবে একটা array নিবে। array তে যেকোনো সংখ্যক কতগুলো number থাকবে। number গুলো negative number (less than zero) ও হতে পারে, আবার positive number (greater than or equal to zero) ও হতে পারে। কোনও number যদি negative হয় সেটাকে আমরা 
বলব “Bad Data”. কোনও number যদি positive হয় সেটাকে আমরা বলব “Good Data”. 
এখন তোমার task: array তে কতগুলো Bad data আছে সেটা খুঁজে বের করতে হবে এবং সেই নাম্বার টা return করতে হবে।
Sample Input & Output:-
Input: [ 1,2,5 ]
Output: 0
Input: [ 2, -5, -7, -13 ]
Output: 3

function findingBadData(numbers){
    if(!Array.isArray(numbers)){
        return "Please give me an Array";
    }
    else{
        let badData = 0;
        for(let i=0; i<numbers.length; i++){
            if(typeof numbers[i] !== "number"){
                return "Please give me an Array of numbers"
            }
            else{
                if(numbers[i]<0){
                    badData++;
                    
                }
            }
        }
        return badData; 
    }
   
}
const myNumbers = [ 2, -5, -7, -13 ];
const inputNumbers = findingBadData(myNumbers);
console.log(inputNumbers);
*/










// Problem-6-------------------
/*
Problem 5: Convert your gems into diamond
তোমাকে একটা function দেওয়া হবে called gemsToDiamond(). এটা ইনপুট হিসেবে তিনটা number ( তোমাদের ৩ বন্ধুর gems এর সংখ্যা ) নিবে। 
১ম বন্ধুর প্রতি gems এর ক্ষমতা = 21
২য় বন্ধুর প্রতি gems এর ক্ষমতা = 32
৩য় বন্ধুর প্রতি gems এর ক্ষমতা = 43
[ gems এর ক্ষমতা বলতে একটা gems কে কয়টা diamond এ convert করা যাবে সেটা বুঝানো হচ্ছে। ]
এখন তোমার task: সব বন্ধুর gems মিলিয়ে total কতটি diamond পাবে সেটা বের করতে হবে। total diamond এর সংখ্যা যদি 1000 এর দিগুন এর উপর হয়ে যায় সেক্ষেত্রে total diamond থেকে 2000 বাদ দিয়ে যতগুলো diamond অবশিষ্ট থাকবে, ততগুলো তোমরা পাবে।
Sample Input & Output:-
Input: 1, 1, 1
Output: 96
Input: 20, 200, 50
Output: 6970
Input: 100, 5, 1
Output: 303

*/
function gemsToDiamond(num1, num2, num3){
    if(typeof num1 !== "number" || typeof num2 !== "number" || typeof num3 !== "number"){
        return "Please provide me a number"
    }
    else if(num1 < 0 || num2 < 0 ||num2 < 0){
        return "Please provide me a positive number"
    }
    else{
        const friend1 = 21;
        const friend2 = 32;
        const friend3 = 43;

        const total = (friend1 * num1) + (friend2 * num2) + (friend3 * num3);

        if(total > 2000){
            return total - 2000;
        }
        else{
            return total;
        }
    }
}
const inputGems = gemsToDiamond(100, 5, 1);
console.log(inputGems);





// Problem-7-------------------
// function name printDetails(). you will be provided an object. you have to use the properties of the object and make a meaning full sentence. if there are any property missing you have to print there (nai);

/*
const obj = {
    name: "mehedy",
    age:26,
    email:"abc@gmail.com"
}
Amar nam mehedy, amar boyos 26, amar email abc@gmail.com, amar bou nai. 
*/




// Problem-8-------------------
/*
Problem 1:
আপনার কাছে একটি জাভাস্ক্রিপ্ট ফাংশন রয়েছে যার নাম হলো isValidPhotoName(photoName, imageExtensions)। এই ফাংশনটি দুটি প্যারামিটার গ্রহণ করে: photoName, যা একটি ছবির নাম প্রদর্শন করে, এবং imageExtensions Array, যা .jpg, .png, ইত্যাদি ছবির এক্সটেনশন গুলি ধারণ করে।
আপনার কাজ হলো isValidPhotoName ফাংশনটি সম্পূর্ণ করা যাতে এই ফাংশনের মাধ্যমে পরীক্ষা করা যায় আপনি দেওয়া প্যারামিটার photoName সঠিক ছবির নাম কিনা তা। এই ফাংশনের কাজ হলো true রিটার্ন করা যদি photoName একটি বৈধ ছবির নামের শেষে বিদ্যমান ছবির এক্সটেনশন গুলির মধ্যে যেকোনটি শেষ হয়; অন্যথায়, ফাংশনটি false রিটার্ন করবে।

*/





// Problem-9-------------------
/* function name sumOfN(). you will be provided a number n. you have to calculate the total of all numbers between 1 to n . use function recursion
*/







// Problem-10-------------------
/*
you will be provided an array of numbers. you have to return array of prime numbers from that input array. 



function findPrimeNumbers(arr){
    if(!Array.isArray(arr)){
        return "please provide me an array of numbers"
    }else{
        
        // 0,1 can not be prime number
        let primes = [];
        for(let item of arr){
            if(item > 1){ //4 
                let isPrime = true;

                for(let i = 2; i< item; i++){ 
                    if(item % i === 0){
                        isPrime = false;
                        break;
                    }
                }
                if(isPrime === true){
                    primes.push(item)
                }
            }

        }
        return primes
    }

}

const numbers = [ 4,8,5,10,19]

console.log(findPrimeNumbers(numbers))
*/