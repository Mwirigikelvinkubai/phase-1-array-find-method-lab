// code your solution here
function superbowlWin(records) {
    // im trying to locate the first record where result is "W"
    const winningRecord = records.find(record => record.result === "W");
  
    // If a winning record is found, return the year; otherwise, return undefined
    return winningRecord ? winningRecord.year : undefined;
  }