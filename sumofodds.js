function sumOffOdds(numbers){
    let sum = 0;
    for (let i=0; i<numbers.length; i++) {
        let index = numbers[i];
        if(index % 2 === 1){
            sum = sum+index;
        }
 
    }
    console.log(sum);
}
let myArray = [22, 33, 44, 55, 66, 77];
sumOffOdds(myArray);