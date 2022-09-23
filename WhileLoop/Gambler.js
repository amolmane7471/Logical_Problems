const WIN = 200, LOSE = 0;

let currentMoney = 100, count = 0, winCount = 0, loseCount = 0;

while (currentMoney < WIN && LOSE < currentMoney) {
    let bet = Math.floor(Math.random() * 2);
    if (bet == 1) {
        currentMoney++;
        winCount++;
    }
    else {
        currentMoney--;
        loseCount++;
    }
    count++;
}
console.log("Number of WINs : " + winCount +  "\nNumber of Losses : " + loseCount + "\nTotal Bets : " + count);
if (currentMoney == 200) {
    console.log("Gambler Won  \n Current Money = " + currentMoney);
}
else {
    console.log("Gambler Lost  \n Current Money = " + currentMoney);
}