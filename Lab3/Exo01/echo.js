// Date: 18/04/21

function exf(s, n) {
  for (let i = 0; i < n; i++) {
    console.log(s);
  }
}

exf("echo", 5);

exf("JS from server", 10);

module.exports = exf;