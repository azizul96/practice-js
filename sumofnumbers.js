function sumOfAll(numbers){
    let sum =0;
    for(let i=0; i<numbers.length; i++){
        let getNumbers = numbers[i];
        sum = sum + getNumbers;
        console.log(sum);

    }
    return sum;

}

const myNumbers = [5, 7, 10, 12, 20, 9];
sumOfAll(myNumbers);

