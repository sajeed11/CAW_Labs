// 2. Notation
function mean(scores) {
  let sum = 0;
  for (let score of scores) {
    sum += score;
  }
  return sum / scores.length;
}

console.log(mean([10, 20, 30]));

module.exports = mean;