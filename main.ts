export {}

const fib = (num: number) => {
  if (num <= 1) return num

  let prev2 = 0
  let prev1 = 1
  let result = 0

  for (let i = 2; i <= num; i++) {
    result = prev1 + prev2
    prev2 = prev1
    prev1 = result
  }

  return result
}

console.log(fib(6))

//! algorithmic complexity O(n)
