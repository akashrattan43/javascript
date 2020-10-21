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

exercise

let a = 'red';
let b = 'blue';

[a, b ] = [b, a ]
console.log(a)
console.log(b)

if else

let hour = 10;

if (hour >= 6 && hour < 12) {
  console.log('Good Morning!')
}  else if (hour < 12 && hour <= 6) {
  console.log('Good Afternoon!')
} else {
  console.log('Good Evening!')
}

switch case

let role = 'guest';

switch (role) {
  case 'guest':
  console.log('Guest User')
  break;

  case 'moderator':
  console.log('moderator user')
  break;
}

for loop

