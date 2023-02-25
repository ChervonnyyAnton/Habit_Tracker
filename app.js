function power(pow) {
    return function (num) {
      return num**pow;
    }
}

const power = (pow) => (num) => num**pow;