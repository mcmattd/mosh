function speedCheck(speed){
    if (speed < 71){
        return 'ok'
    }

    let speedCalc = Math.floor((speed - 70)/5)
    
    return speedCalc < 12 ? speedCalc : 'License revoked'


}

console.log(speedCheck(125))