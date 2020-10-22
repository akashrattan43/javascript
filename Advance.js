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