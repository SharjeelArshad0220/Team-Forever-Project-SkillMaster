let totalScore = 0;

for (let ball = 1; ball <= 6; ball++) {
  let run = Math.floor(Math.random() * 7); // 0–6 random run
  console.log("Ball " + ball + ": " + run + " run");
  totalScore += run;
}

console.log("Total Score: " + totalScore);