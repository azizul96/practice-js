/* 
--------------------
CONDITIONALS
--------------------
1. meaning of: >, <, >=, <=, ==, !=, ===, !==,
ans-
greater than, less than, greater than or equal, less than or equal, equal to, not equal to, equal value and equal type, not equal value or not equal type

2. Meaning of &&
ans-
All the logic have to be true or false.

3. Meaning of ||
ans-
true if and only if one or more of its operands is true.


4. Let's say you have x amount of money. if you have more than 80,000, then you will by a mac
if more than 60,000 then you will by gaming laptop
if you more than 40,000 then  you will by Lenovo Yoga
if you have more than 20, 000 then  you will by an used laptop
otherwise, you will use your mobile phone
*/
//ans-
var myMoney = 10000;
if(myMoney>80000){
    console.log("I will buy a mac");
}
else if(myMoney>60000){
    console.log("I will buy a gaming laptop");
}
else if(myMoney>40000){
    console.log("I will buy a Lenovo Yoga");
}
else if(myMoney>20000){
    console.log("I will buy an used laptop");
}
else{
    console.log("I will use my smart phone");
}