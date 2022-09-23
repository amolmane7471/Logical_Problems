let sum = 0 
for( i = 0 ; i < 5 ; i++){
num = 1 + Math.floor(Math.random()* 99)
console.log(num)
sum += num
}

avg = sum/i

console.log("sum of 5 two digit number is : "+sum)
console.log("Avg is : "+avg)