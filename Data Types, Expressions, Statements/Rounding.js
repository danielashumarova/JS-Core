function rounded([number,precision]) {
    if (precision>15) {
        precision = 15
    }
    let multiplier=Math.pow(10,precision)

    return Math.round(number*multiplier)/multiplier

}

console.log(rounded([3.1415926535897932384626433832795, 2]))