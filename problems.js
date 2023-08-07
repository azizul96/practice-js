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


function isJavaScriptFile(fileName){
    if(typeof fileName !== "string"){
        return "please provide me a valid number"
    }
    else{
        if(fileName.endsWith(".js") === true){
            return true;
        }
        else{
            return false;
        }
    }

}
console.log(isJavaScriptFile("hello.js"))
*/
/*
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

*/