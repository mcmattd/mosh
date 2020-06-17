function evenOdd(number){
    for (i = 0 ; i <= number; i++){
        const message = i % 2 == 0 ? 'even' : 'odd'
        console.log(i, message)
    }
}

evenOdd(10)