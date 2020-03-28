let numbers = [10, 12, 8, 'test', 122];



function FindTheBiggestNumber (arr){
    let FilteredNumbers = [];
    for (i=0; i<arr.length; i++){
        if (isNaN(arr[i])){
            console.log('One of the inputs is not a number')
        } else { FilteredNumbers.push(arr[i]);

        }
    } //Well done!!!!

    let num = 0;

    for (i=0; i<FilteredNumbers.length; i++){
        if (num < FilteredNumbers[i]){
            num = FilteredNumbers[i]
        }
    }

    console.log(num)
    
}
FindTheBiggestNumber(numbers);

