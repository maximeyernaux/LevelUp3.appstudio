function carLoanPayment(amount, timeframe, interestRate){
  monthlyInterestDecimal = (interestRate /12)/100
  d = ((1+monthlyInterestDecimal)**timeframe - 1)/(monthlyInterestDecimal*(1+monthlyInterestDecimal)**timeframe)
  payementCar = amount/d
  return payementCar  
}

function homeLoanPayment(amount, timeframe, interestRate){
  monthlyInterestDecimal = (interestRate /12)/100
  yearIntoMonth = timeframe*12
  d2 = ((1+monthlyInterestDecimal)**yearIntoMonth - 1)/(monthlyInterestDecimal*(1+monthlyInterestDecimal)**yearIntoMonth)
  payementHome = amount/d2
  return payementHome  
}


let calculator = prompt("What calculator do you want to use ? (Car loan or Home loan)")
let amountUser = prompt("What is the amount of the loan ?")
let timeframeUser = prompt("What is the timeframe ? In months for a car loan and in years (15 or 30) for a home loan")
let interestRateUser = prompt("What is the interest rate (expressed in percentage) ?")

let monthlyPayement = 0
if(calculator == "Car loan"){
  monthlyPayement = carLoanPayment(amountUser,timeframeUser, interestRateUser)
  alert(`A car loan for $${amountUser} over ${timeframeUser} months at ${interestRateUser}% interest would have a monthly payment of $${monthlyPayement}.`)

}

else if(calculator == "Home loan"){
  if (timeframeUser == 15 || timeframeUser == 30){
  monthlyPayement = homeLoanPayment(amountUser,timeframeUser, interestRateUser)
  alert(`A home loan for $${amountUser} over ${timeframeUser} years at ${interestRateUser}% interest would have a monthly payment of $${monthlyPayement}.`)
  
  }
  else {
  alert("Sorry, the timeframe encoded is not correct")
  }
}
else{
    alert("Sorry, the calculator encoded is not correct")
}
