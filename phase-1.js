function stretch() {
  const p = new Promise(resolve => {
    setTimeout( () => {
      console.log("done stretching");
      resolve()
    }, 1000)
  });
  return p
}

function runOnTreadmill() {
  const p = new Promise(resolve => {
    setTimeout( () => {
      console.log("done running on treadmill");
      resolve()
    }, 500)
  });
  return p
}

function liftWeights() {
  const p = new Promise(resolve => {
    setTimeout( () => {
      console.log("done lifting weights");
      resolve()
    }, 2000)
  });
  return p
}

// .then should have the cb as the parameter NOT INVOKED to chain then events
function workout() {
  stretch()
  .then(runOnTreadmill)
  .then(liftWeights)
  .then(() => {
    console.log("done working out")
  })
}


/* ============================ TEST YOUR CODE ============================

Run the file (`node phase-1.js`) and check your output against the expected
output.
*/


workout();
  // should print out the following:
    // done stretching
    // done running on treadmill
    // done lifting weights
    // done working out
