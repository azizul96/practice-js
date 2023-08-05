/* 
------------------
LOOP
------------------
1. Display "Ajke amar mon valo nei" for 39 times
ans-
var myDay = 0;
while(myDay<40){
    console.log("Ajke amar mon valo nei");
    myDay++;
}

2. Display numbers between 58 to 98
ans-
for(var i=0;i<99; i++){
    if(i<58){
        continue;
    }
    console.log(i);
}

3. Show all even numbers from 412 to 456
ans-
for(var i=0;i<457; i+=2){
    if(i<412){
        continue;
    }
    console.log(i);
}

4. Show all odd numbers 581 to 623
ans-
for(var i=1;i<625; i+=2){
    if(i<581){
        continue;
    }
    console.log(i);
}

5. Difference between while loop and for loop
For loop is used when the number of iterations is already known. 
While loop is used when the number of iterations is already Unknown.


6. Declare an array for all the topics that you have learned last few days
display then as output


7. Create an array for all the mobile phones. Display all the elements of the array
by using a while loop
ans-
var myPhones = ["Nokia","Samsung","walton","Xiaomi"];
var i = 0;
while(i<myPhones.length){
    var i = myPhones[i];
    console.log(myPhones);
    myPhones++;
}


8. Run a loop from 30 to 86. this loop will stop if the values get higher than 44
ans-
for(var i=0; i<86; i++){
    if(i<30){
        continue;
    }
    else if(i>44){
        break;
    }
    console.log(i)
}


9. Write the price of the books that you have. 
Display the prices if the prices is lower than 200
ans-
var bookPrices = [150, 180, 210, 190, 220];
for(var i=0; i<bookPrices.length; i++){
    if(bookPrices[i] > 200){
        continue;
    }
    console.log(bookPrices[i]);
}

*/
var bookPrices = [150, 180, 210, 190, 220];
for(var i=0; i<bookPrices.length; i++){
    if(bookPrices[i] > 200){
        continue;
    }
    console.log(bookPrices[i]);
}