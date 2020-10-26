const circle = {
    radius: 1,
    location : {
      x: 1,
      y: 1
    }, 
    draw () {
      console.log('draw')
    }
  }
  
  console.log(circle.draw)

  // Factory function
function createCircle (radius) {
    return {
      radius : radius, 
       draw () {
         console.log('draw')
       }
       }
  }
  
  createCircle(1)