for (let i = 0; i <= 10; i++) {
    if (i % 2 !== 0) console.log(i)
  }
  
  let i = 0;
  while (i <= 10) {
    if (i % 2 !== 0) console.log(i)
    i++
  }
  
  const person= {
    name: 'mosh',
    age: 30
  }
  
  for (let key in person)
    console.log(key, person[key]);
  
  const color = ['red', 'green', 'blue']
  
  for (let index in color)
  console.log(index, color[index])
  for (let color of colors)
  console.log(color)  

  let i = 0;
while (i <= 10) {
  if ( i === 5 ) break;
  console.log(i)
  i++;
}


function sum(a, b) {
    return (a > b) ? a : b
 }
 
 let number = sum(3, 4)
 console.log(number); 

 const output = fizzBuzz(7);
console.log(output)

function fizzBuzz(input) {
  if(typeof input !== 'number'){
    return 'Not a number'
  }
  if (input % 3 === 0 && input % 5 === 0) {
    return 'fizzBuzz'
  } 
   if(input % 3 === 0){
    return 'fizz'
  }if (input % 5 === 0) {
    return 'buzz'
  }

  return inputghsfhjcbnshruxhdjdhshhhjhjfkf
}

function checkSpeed(speed) {
  const speedLimit = 70
  const kmPerPoint = 5

  if (speed < speedLimit + kmPerPoint) {
    console.log('Ok')
  } else {
    const points = Math.floor((speed - speedLimit) / kmPerPoint)
    if (points >= 12) 
    console.log('Liceance Suspended')
    else 
    console.log('points', points)
    
  }
}

checkSpeed(130)

function showNumbers(num) {
  for (let i = 0; i <= num; i++) {
    if (i % 2 === 0)
      console.log(i, 'EVEN')
    else 
      console.log(i, 'ODD')
  }
}

function showNumbers(num) {
  for (let i = 0; i <= num; i++) {
  const message = (i % 2 === 0) ? 'EVEN' : 'ODD'
    console.log(i, message)
  }
}

showNumbers(10)

const circle = {
  radius: 1,
  location: {
    x: 1, 
    y: 2
  },
  isVisible: true,
  draw: function() {
    console.log('draw')
  }
}

function createCirlce(radius) {
  return {
  radius,

  draw() {
    console.log('draw')

  }
}
}

const circle1 = createCirlce(1);
console.log(circle1)

function getIndexToIns(arr, num) {
  arr.sort(function(a,b){
    return a-b;
  });

  for(var i=0;i<arr.length;i++){
    if(num < arr[i]){
      arr.splice(i,0,num);
    }
  }
  return arr; 
}

getIndexToIns([3, 10, 5], 3);

const circle = {
  radius: 1
}

circle.color = 'yellow'
circle.draw = function() {}

delete circle.color
delete circle.draw

console.log(circle)

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log('draw')
  }
}


const circle = new Circle(2)

let obj = {value: 10}

function increase(obj) {
  obj.value++
}

increase(obj)
console.log(obj)

const circle = {
  radius: 1,
  draw : function() {
    console.log('draw')
  }
}

for (let key in circle) 
  console.log(key)

//cloning 
const circle = {
  radius: 1,
  draw () {
    console.log('draw')
  }
}

const another = {}

for (let key in circle)
  another[key] = circle[key]

const another = Object.assign({
  color: 'yellow'
}, circle);

const another = { ...circle};
 
console.log(another)

// Garbage collection

let circle = {}
console.log(circle)

// find the variable that no longer in use deallocation 

// Math

const random = Math.random(2, 3)

console.log(random)


// string primitive
const message = 'This is my first message'
message.length
message.endsWith('e')
message.indexOf('my')

// Backticks

const another = `this is my 'first' message`
console.log(another)

//date

const now = new Date()
const date1 = new Date(' May 11 2018 09:00')
const date2 = new Date( 2018, 4, 11, 9)


now.setFullYear(2017)
console.log(now)
console.log(date1)
console.log(date2)


//array

const numbers = [3, 4]

//End
//push
numbers.push(5, 6)


//beginning 

numbers.unshift(1, 2)

// middle 
numbers.splice(2, 0, 'a', 'b')
console.log(numbers)

const numbers = [1, 2, 3, 1,  4]

console.log(numbers.indexOf(1))
console.log(numbers.lastIndexOf(1))

console.log(numbers.indexOf(1) !== -1)

const courses = [
  {id: 1, name: 'a'},
  {id: 2, name: 'b'}
]

// console.log(courses.includes({id:1, name: 'a'}))

let course = courses.find(function(course){
  return course.name === 'b' 
})

console.log(course)

//index

const courses = [
  {id: 1, name: 'a'},
  {id: 2, name: 'b'}
]

// console.log(courses.includes({id:1, name: 'a'}))

let course = courses.findIndex(function(course){
  return course.name === 'a' 
})

console.log(course)

const courses = [
  {id: 1, name: 'a'},
  {id: 2, name: 'b'}
]

// console.log(courses.includes({id:1, name: 'a'}))

let course = courses.findIndex(function(course){
  return course.name === 'a' 
})

console.log(course)

let numbers = [1, 2, 3, 4]
let another = numbers;
// empting array;

// solution 1 
numbers = []

// solution 2 
numbers.length = 0

// solution 3
numbers.splice(0, numbers.length)

// solution 4
while (numbers.length > 0)
numbers.pop()

console.log(numbers)
console.log(another)

//concat

const first = [{id: 1}]
const second = [4, 5, 6]

const combined = first.concat(second)
first[0].id = 10
// slice

const slice = combined.slice(2)
console.log(combined)
console.log(slice)

const combined = [...first, ...second]

const numbers = [1, 2, 3]

for (let number of numbers)
  console.log(number)

  numbers.forEach(nmber => 
    console.log(nmber)
  )


  const joint = numbers.join(',')

console.log(joint)

const message = 'This is my first message'
const parts = message.split(' ')
console.log(parts)
const combined = parts.join('-')
console.log(combined)


const numbers = [2, 3, 1]

numbers.sort()
console.log(numbers)

numbers.reverse()
console.log(numbers)

const courses = [
  {id: 1, name: 'Node.js'},
  {id: 2, name: 'Javascript'}
]

courses.sort(function(a, b) {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0
})
console.log(courses)

const numbers = [1, 2, 3]

const allPositive = numbers.every(function(value) {
  return value >= 0
})

console.log(allPositive)

const numbers = [1, -1, 2, 3]

const allOnePositive = numbers.some(function(value) {
  return value >= 0
})

console.log(allOnePositive)

const numbers = [1, -1, 2, 3]

const filter = numbers.filter(value => {
  return value >= 0
})

console.log(filter)

const numbers = [1, -1, 2, 3]

const filtered = numbers.filter(value => value >= 0)

const items = filtered.map(n => '<li>' + n + '</li>')

const html ='<ul>' + items.join('') + '<ul> '

console.log(html)
const numbers = [1, -1, 2, 3]

const items = numbers
.filter(value => value >= 0)
.map(n => ({value: n}))



console.log()
const numbers = [1, -1, 2, 3]

let sum = 0

for (let n of numbers)
  sum += n;
  
  console.log(sum)

  const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
  }, 0)

  console.log(sum)

// function declaration

function walk() {
  console.log('walk')
}

//function expression

let run = function () {
  console.log('run')
};

walk()
run()
let move = run;
walk()
move()

// function declaration
walk()

function walk() {
  console.log('walk')
}

//function expression
//run() if run it before it will not work
let run = function () {
  console.log('run')
};
//HOISTING

function sum (a, b) {

  let total = 0;
  for (let value of arguments)
    total += value
  // console.log(arguments)
  return total
}

console.log(sum(1, 2, 3, 4))


//REST OPERATOR

function sum (discount, ...prices) {
  // return args.reduce((a, b) => a+b )

  const total = prices.reduce((a, b) => a + b)
  return total * (1 - discount)
}

console.log(sum(0.1, 20, 30)) 