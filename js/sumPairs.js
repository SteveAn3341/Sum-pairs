// use a nested for loop to check if any pari of sum is equal to the given sum




// exports.sumPairs = function arraypair(array,sum){
  function sum(array,sum ){
    let arr = []
      for (i = 0;i < array.length;i++) {
        let first = array[i];
          for (j = i + 1;j < array.length;j++) {
            let second = array[j];
              if ((first + second) == sum) {
                  arr.push(first,second)  
                }
      }

    }
  return arr
}
console.log(sum([1, 2, 3, 4, 5], 6))


