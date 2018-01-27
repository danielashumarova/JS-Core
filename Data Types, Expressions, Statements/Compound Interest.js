function compoundInterest(arr) {
   let sum=arr[0]
   let interestRate=arr[1]/100
    let frequency=12/arr[2]
    let time=arr[3]

    let f=sum*Math.pow((1+interestRate/frequency),frequency*time)
    return f
}


let arr=[1500, 4.3, 3, 6]