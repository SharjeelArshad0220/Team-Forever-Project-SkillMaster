let totalScore = 0;
for (let ball = 1 ; ball <= 6 ; ball++ ) {
   let run = Math.floor(Math.random() * 7 ) ;
   console.log (" Ball " + ball + " : " + run + " runs " );
     totalScore += run ;
}
console.log ("Total Score in Over : " + totalScore );