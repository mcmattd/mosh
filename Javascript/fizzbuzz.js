function fizzBuzz(input){
    let returnValue = ''

    if (typeof input != "number") {
        return 'not a number'
    }

    if (input % 3 == 0) {
        returnValue  += 'Fizz'
    } 

    if (input % 5 == 0) {
        returnValue  += 'Buzz'
    }

    return returnValue != '' ? returnValue : input
}

const output = fizzBuzz(7)

console.log(output)
