/*function func(n) {
  return n <= 1 ? n : func(n - 1) + func(n - 2);
}
console.log(func(10)); // 55 */


/*function isPalindrome(num, count) {
  count = count || 0;

  let str = num.toString();
  let strReverse = str.split("").reverse().join("");
  
  if (str === strReverse) {
    return {
      result: num,
      steps: count,
    };
  }
  return isPalindrome(num + Number(strReverse), count + 1);
} 

console.log(isPalindrome(96));//выдаст ошибку, если Lychrel number*/
 



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



