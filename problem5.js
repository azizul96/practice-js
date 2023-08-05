// ১. একটা কোড লিখো। যেটা দিয়ে কোন একটা array এর মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিতে পারবে। 
/*
const age =[11, 22, 33, 44, 55, 66, 9]
const bigAge = Math.min(...age);
console.log(bigAge);
*/


// ২. একটা কোড লিখো যেটা দিয়ে তিনটা সংখ্যার মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিবে।  
/* 
let num1 = 9;
let num2 = 11;
let num3 = 33;
if(num1 < num2 && num1 < num3){
    console.log("Smallest number is", num1 );
}
else if(num2<num1 && num2<num3){
    console.log("Smallest number is", num2 );
}
else{
    console.log("Smallest number is", num3 );
}
*/


// ৩. একটা ফাংশন লিখো। সেই ফাংশনের মধ্যে ইনপুট হিসেবে একটা array নিবে। সেই array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হবে ইনপুট নেয়া array এর মধ্যে যতগুলা সংখ্যা আছে। সেই সংখ্যা গুলার গড় বের করবে। তারপর সেই গড় ফাংশনের রিটার্ন হিসেবে দিয়ে দিবে। একটু চিন্তা করো। বুঝার চেষ্টা করো। ট্রাই করো। দেখো পারো কিনা। 

function averageOfAll(numbers){
    let sum = 0;
    
    for(let i=0; i<numbers.length; i++){
        let element = numbers[i];
        sum = sum+element;
    }
    const getAverage = sum/numbers.length;
    return getAverage;
}
const myArray = [11, 22, 33, 44, 55, 66, 77, 88]
const callAverage = averageOfAll(myArray);
console.log(callAverage);


// ৪. একটা ফাংশন লিখো। যেটা ইনপুট প্যারামিটার হিসেবে একটা আয়তক্ষেত্রের দৈর্ঘ্য আর উচ্চতাকে নিবে। তারপর সেই আয়তক্ষেত্র এর area (আয়তন) কে রেজাল্ট হিসেবে রিটার্ন করবে।


function calculateArea(height, length){
    let area = height * length
    return area;
}
const getHeightLength  = calculateArea(50, 75);
console.log(getHeightLength);



// ৫. (ট্রিকি) কোন একটা array এর মধ্যে অনেকগুলা সংখ্যা আছে। সেই সংখ্যাগুলো থেকে second largest সংখ্যা বের করার একটা প্রোগ্রাম লিখো। দরকার হলে গুগলে সার্চ দাও। তারপর সার্চ রেজাল্ট দেখে বুঝে বুঝে করার চেষ্টা করো। 

function findSecondLargest(numbers){
    let first = -1;
    let second = -1;
    for(let i=0; i<numbers.length; i++){
        if(numbers[i]>first){
            first = second;
            second = numbers[i]
        }
        else if(numbers[i] > second && numbers[i] !== first){
            second = numbers[i]
        }
    }
    return second;
}

const arr = [15, 34, 68, 25, 12, 45, 72];
const geNumbers =findSecondLargest(arr);
console.log(geNumbers);