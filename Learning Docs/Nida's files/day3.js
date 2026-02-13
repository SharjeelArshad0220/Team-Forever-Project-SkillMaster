let score = 0;
let wickets = 0;

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