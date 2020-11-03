function findSum(number){
    let sum = 0;
    let i = 0;
    let str = number.toString().split("");
    while(i < number.toString().length){
        let strToInt = parseInt(str[i]);
        sum += strToInt;
        i++;
    }
    console.log(sum);
}

findSum(2222);

