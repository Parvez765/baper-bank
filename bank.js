// Desposit and Withdrawl Functionality

document.getElementById("deposit-btn").addEventListener("click", function () {
    const depositFiled = document.getElementById("deposit-field");
    const depositFiledString = depositFiled.value 
    const depositFiledNumber = parseFloat(depositFiledString);


    const deposit = document.getElementById("deposit");
    const depositString = deposit.innerText;
    const depositNumber = parseFloat(depositString);

    const totalDeposit = depositNumber + depositFiledNumber;

    depositFiled.value = ""

    if (isNaN(totalDeposit)) {
        alert("Please Enter Amount You Want To Deposit")
        return;
    }
    deposit.innerText = totalDeposit;

    const totalAmount = document.getElementById("total-amount")
    const totalAmountString = totalAmount.innerText;
    const totalAmountNumber = parseFloat(totalAmountString);

    const finalAmount = totalAmountNumber + depositFiledNumber;

    totalAmount.innerText = finalAmount;
})