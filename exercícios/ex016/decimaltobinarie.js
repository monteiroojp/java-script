function dec2bin(decNumber){
    let restStack = []
    let rest;
    let binString = ''

    while(decNumber > 0){
        rest = Math.floor(decNumber%2)
        restStack.push(rest)
        decNumber = Math.floor(decNumber/2)
    }


    while(restStack.length > 0){
        binString += restStack.pop().toString()
    }

    return binString
}

