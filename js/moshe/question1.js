function FindTheBiggerNumber (num1, num2){
    if (isNaN(num1) || isNaN(num2)){
        console.log('One of the inputs is not a number')
    } else {
        if ( num1 > num2){
            console.log('The first number is bigger')
        } else {
            console.log('The second number is bigger')
        }
    }

    //should return the number in return
    

};

FindTheBiggerNumber(10, 304);