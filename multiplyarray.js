function multiOfAll(numbers){
    let sum =1;
    for(let i=0; i<numbers.length; i++){
        let getNumbers = numbers[i];
        sum = sum * getNumbers;
        

    }
    return sum;

}

const myNumbers = [5, 7, 10, 12, 20, 9];
const myAllNumber = multiOfAll(myNumbers);
console.log(myAllNumber);