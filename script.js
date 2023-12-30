/*function fib(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
  }
  
  console.log( fib(2) ); 
  console.log( fib(3) ); 
  console.log( fib(10) ); */




 /* function isPalindrome(number) {
    const reversed = parseInt(number.toString().split('').reverse().join(''));
    return number === reversed;
  }
  
  function createPalindrome(startNumber) {
    let steps = 0;
    let currentNumber = startNumber;
  
    while (!isPalindrome(currentNumber)) {
      const reversed = parseInt(currentNumber.toString().split('').reverse().join(''));
      currentNumber += reversed;
      steps++;
      if (steps >= 1000) {
        return { result: `Не палиндром: ${number}`, steps };
      }
    }
  
    return { result: currentNumber, steps };
  }
  
  const number = 145;
  const result = createPalindrome(number);
  
  console.log(`Палиндром: ${result.result}`);
  console.log(`Шаги: ${result.steps}`);
 */ 


  function permuteUnique(nums) {
    const result = [];
  
    function backtrack(current, remaining) {
      if (remaining.length === 0) {
        result.push(current.slice());
        return;
      }
  
      const uniqueSet = new Set();
      for (let i = 0; i < remaining.length; i++) {
        if (!uniqueSet.has(remaining[i])) {
          uniqueSet.add(remaining[i]);
          current.push(remaining[i]);
          const temp = remaining.splice(i, 1)[0];
          backtrack(current, remaining);
          current.pop();
          remaining.splice(i, 0, temp);
        }
      }
    }
  
    backtrack([], nums);
    return result;
  }
  
  const inputArray = [1, 2, 3];
  const permutations = permuteUnique(inputArray);
  
  console.log(permutations);



