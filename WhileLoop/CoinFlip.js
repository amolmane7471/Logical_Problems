let headCount = 0;
let tailCount = 0;

while (headCount != 11 && tailCount != 11) {
    let coin = Math.floor(Math.random() * 2);
    if (coin == 0) {
        headCount++;
    }
    else {
        tailCount++;
    }
}

console.log("Head Count : " + headCount + "\nTails Count : "+ tailCount);
