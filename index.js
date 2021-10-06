let calc = document.getElementById("cloan");
const calcLoan =(e)=>{
    e.preventDefault()
    let loanAmt = document.getElementById("my_amount").value;
    let intRate = document.getElementById("int").value;
    let monthly = document.getElementById("my_month").value;
   
    let interest = (loanAmt * (intRate * 0.01)) / monthly;
    let payment = ((loanAmt / monthly ) + interest).toFixed(2);
    document.getElementById("payments").innerText = payment;
   
}
calc.addEventListener("click",calcLoan)


const clear =() =>{
    document.getElementById("my_amount").value = "";
    document.getElementById("int").value = "";
    document.getElementById("my_month").value = "";
}