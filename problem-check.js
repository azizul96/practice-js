// ১. সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং এই ফাংশন ইনপুট হিসেবে নিবে feet আর রিটার্ন করবে inch । অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়। 


// function feetToInch(feet){
//     const inch = feet * 12;
//     return inch;
// }
// const feet = feetToInch(6);
// console.log(feet);



// ২. একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে রেজাল্ট রিটার্ন করবে। 

// function centimeterToMeter(centimeter){
//     const meter = centimeter / 100;
//     return meter;
// }
// const centimeter = centimeterToMeter(50);
// console.log(centimeter);



/*
৩. আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। যেই ফাংশনের নাম হবে paperRequirements এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও। সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে। 
এইবার ভালো করে খেয়াল করো।

প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা 
সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা 
তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা 
এখন তোমার কাজ হচ্ছে paperRequirements নামক ফাংশন লিখে ফেলা যাতে। সেই ফাংশনকে কল করে কোন বই এর কত কপি লাগবে বলে দিবে প্যারামিটার হিসেবে। আর ফাংশন হিসাব করে বলে দিবে তোমার সর্বমোট কতপৃষ্ঠা কাগজ লাগবে। 
উত্তর হিসেবে সংখ্যা রিটার্ন করবে। 
*/

// function paperRequirements(book1, book2, book3){
//     const bookPaper1 = book1 * 100
//     const bookPaper2 = book2 * 200
//     const bookPaper3 = book3 * 300

//     const totalBookPaper = bookPaper1 + bookPaper2 + bookPaper3
//     return totalBookPaper;

// }

// const bookQuantity = paperRequirements(2, 2, 3)
// console.log(bookQuantity);






/*
৪. একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে। 
*/

// function bestFriend(friendsName){
//     let bigname = [0]
//     for(let i=0; i<friendsName.length; i++){
//         let index = friendsName[i];
        
//         if(index.length > bigname.length){
//             bigname = index;
//         }
//     }
//     return bigname;
// }
// const allFriendsName = ["Alif", "Farhad", "Reza", "Sakil", "Moon",]
// const friendsName = bestFriend(allFriendsName);
// console.log(friendsName)






/*
৫. এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে। 
*/

function findPositiveNumber(numbers){
    let positiveArray = [];
    for(let i=0; i<numbers.length; i++){
        let index = numbers[i];
        if(index < 0){
            break;
        }
        else if(positiveArray !== 0){
            positiveArray.push(index)
        }
    }
    return positiveArray;
}
const allNumber = [12, 31, 22, 55, -11, 43, 34];
const positiveNumbers = findPositiveNumber(allNumber);
console.log(positiveNumbers);



// চেষ্টা করবে আমাদের ভিডিও না দেখে প্রব্লেমগুলো করতে। দরকার হলে গুগলে সার্চ দিতে পারবে। আর একান্তই দরকার হলে প্রব্লেম সলভিং এর জন্য আমাদের ভিডিও দেখতে পারবে। তারপর উপরের ৫টা প্রব্লেম সলভিং চ্যালেঞ্জ এর মধ্যে তুমি যদি ৪টা বা ৫টা করে ফেলতে পারো। তাহলে আর তোমার কোন টেনশন নাই। তুমি সামনে এগুতে পারবে। আর তুমি যদি ২টা বা ৩ টা করতে পারো। তাহলে কিছুটা হার্ডওয়ার্ক করতে হবে। আরেকটু ভালো করে বুঝার চেষ্টা করবে। তবে চেষ্টা করতে করতে সামনে এগুতে পারবে। আর যদি একটাও না পারো বা মাত্র একটা পারো। তাহলে আমাদের ইমেইল করে দাও web@programming-hero.com এ । আমরা তোমাকে বিস্তারিত ইমেইলে জানিয়ে দিবো। 

// ভালো করে প্রাকটিস করো। আর তারপরেও সময় থাকলে এই মাইলস্টোন এর সিম্পল প্রবলেম সলভিংগুলা (factorial বাদে বাকি প্রব্লেমগুলো) ভালো করে দেখো। সেগুলা রিলেটেড সহজ কিছু প্রবলেম এসাইনমেন্ট এ থাকবে। 

// এখন প্যারা নিলে, সামনে আরাম পাবে।