//easy question
let numberToCheck1 = 5
let numberToCheck2 = "2323"

function whoIsBigger(num1, num2) {

    if (typeof num1 === "number" && typeof num2 === "number") {
        console.log(` :: the first nummber :: ${num1}`)
        console.log(` :: the secend nummber :: ${num2}`)

        // Who IS bigger is here

        if (num1 !== num2) {

            if (num1 > num2) {
                console.log(` :: the bigget number is ${num1}`)
            } else {

                console.log(` ::  the bigget number is ${num2}`)
            }


        } else {
            console.log("the numbers are equal")
            return
        }

    } else {
        console.log("the type of one of the numbers is not number")
        return
    }
}

// whoIsBigger(numberToCheck1,numberToCheck2)




//hard question


array = [1, 2, 2, 23, , 4, 4, 5]

function whoIsBiggerArray(array) {
    //cheack type of numbers
    for (let i in array) {
        if (typeof array[i] === "number") {
            
        } else {
            return "the type of one of the numbers in the are is not number"
            //you should remove the non number. besid this, everthing is good...
        }
        
    }
// check who is bigger
        let biggestNum = -9999
        for (let i in array) {
            
            if (array[i] > biggestNum) {

                biggestNum = array[i]
            }
        }
            console.log(`:: this is the biggets numbers in the array :: ${biggestNum}`)


    }

    whoIsBiggerArray(array)