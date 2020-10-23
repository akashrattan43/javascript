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