function sumOfAll(numbers){
    let sum =0;
    for(let i=0; i<numbers.length; i++){
        let getNumbers = numbers[i];
        sum = sum + getNumbers;
        

    }
    return sum;

}




function sumOffOdds (numbers){
    let sum =[];
    for(let i=0; i<numbers.length; i++){
        let index = i;
        let element = numbers[index];
        if(element % 2 !== 0){
            sum.push(element);
            
            
        }
    }
    return sum; 
}
const myNumbers = [11, 12, 14, 17, 19, 20]
const myOddNumber = sumOffOdds(myNumbers)

const allNumber = sumOfAll(myOddNumber);
console.log(allNumber);


