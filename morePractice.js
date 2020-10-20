let point = 101;

let type = point > 100 ? 'Gold' : 'Silver'

console.log(type)

Logical and (&&)
console.log(true && false)

let high = true;
let goodCredit = true;
let eligible = high && goodCredit
console.log(eligible)

Logical and (||)
let high = false;
let goodCredit = false;
let eligible = high || goodCredit

let applicationRefused = !eligible
console.log(applicationRefused)

Bitwise operators
console.log(1 | 2)
console.log(1 &  2)

Operator Precedence
let x = 2 + 3 * 4
console.log(x)