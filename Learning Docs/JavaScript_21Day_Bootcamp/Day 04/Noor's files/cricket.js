let score = 0;
let wickets = 0;
for (let ball = 1 ; ball <= 6 ; ball++ ) {
   let run = Math.floor(Math.random() * 7 ) ;
   let wicketSimulation=Math.floor(Math.random() * 7 ) ;
   if (wicketSimulation===ball) {
    addWicket()
   }
   addRuns(run);
}
console.log ("Total Score in Over : " + score);

function addRuns(runs) {
  score += runs;
  console.log("Runs added:", runs);
  console.log("Total score:", score);
}

function addWicket() {
  wickets++;
  console.log("Wicket lost!");
  console.log("Total wickets:", wickets);

  if (wickets === 10) {
    console.log("All out! Match over 🏏");
  }
}

// Tests (simulation)
console.log("Match start");

// over 1
addRuns(4);
addRuns(2);
addWicket();

// over 2
addRuns(6);
addRuns(1);
addWicket();

// over 3
addRuns(3);
addRuns(4);