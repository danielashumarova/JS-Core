function gradToDegree(grad) {

    grad=grad%400
    let degree=grad*0.9
    let degreeOutput=degree<0 ? 360+degree :degree
    return degreeOutput
}


let output=gradToDegree((['850']))
console.log(output)