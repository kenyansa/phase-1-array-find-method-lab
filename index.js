// code your solution here
// superbowlWin(record):returns a year the Denver Broncos won the superbowl:
// superbowlWin(record): returns undefined if the record has no win objects:
superbowlWin = (record) => {
  const result = record.find((record) => record.result === "W");
  return !!result ? result.year : undefined;
};