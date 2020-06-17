function sum(limit){
    let ofThree = 0

    for (let i = 0 ; i <= limit ; i++){
        if (i % 3 == 0 || i % 5 == 0){
            console.log(i)
            ofThree += i
        }
    }

    return ofThree
}

console.log(sum(10))