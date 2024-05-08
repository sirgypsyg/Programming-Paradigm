function printNumbers(nr){
    let result = "";

    for (let index = 0; index < nr; index++) {
        result += index;
    }
    return result;
}

console.log(printNumbers(5));