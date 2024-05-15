function generateRandom(min,max){
    return Math.floor(Math.random() * (max-min + 1) + min);
}

console.log(generateRandom(2,3))

let array = [];

for (let i = 0; i < 10; i++) {
    array.push(generateRandom(1, 20));
}

array = array.filter((item) => item > 10)

if(array.length > 5){
    console.log("udało sie");
}
else{
    console.log("niestety nie");
}

array.sort((a,b) => a > b ? -1 : 1);
console.log(array);


array.reduce(
    (previous, current) => previous + current, 
    0
)