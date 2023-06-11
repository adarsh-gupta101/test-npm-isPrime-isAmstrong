const isAmstrong = (a) => {
  //check if a number is amstrong
  let number = String(a);
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    sum += Math.pow(Number(number[i]), 3);
  }
  if (sum == a) {
    return true;
  }
  return false;
};

const isPrime = (a) => {
  //check if a number is prime
  for (let i = 2; i < a; i++){
    if (a % i == 0) {
          return false;
        }

  }
  return true;
 
}


module.exports = {
  isPrime,
  isAmstrong
};