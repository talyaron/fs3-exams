// 1
let a=5
let b="10"

function testingAB(a,b){
    if( a === !NaN || b === !NaN ){
        return false
    }
    else{
      console.log( Math.max(a,b)) 
    } 
}
testingAB(7,5)


// 2

let numbers=[1,2,3,4,5,6,6,99]

function testingArr(){
   console.log(Math.max(...numbers))
   
}
testingArr()

