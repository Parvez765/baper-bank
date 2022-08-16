document.getElementById("withdrawl-btn").addEventListener("click", function () {
    const withdrawlField = document.getElementById("withdraw-field");
    const withdrawlFieldString = withdrawlField.value;
    const withdrawlFieldNumber = parseFloat(withdrawlFieldString);

    
    const withdrawAmount = document.getElementById("withdraw");
    const withdrawAmountString = withdrawAmount.innerText;
    const withdrawAmountNumber = parseFloat(withdrawAmountString);

    
    const totalWithdrawlAmount = withdrawAmountNumber + withdrawlFieldNumber;
    if (isNaN(totalWithdrawlAmount)) {
        alert("Please Enter Withdrawl Amount");
        return;
    }


    
    withdrawlField.value = ""
    
    
    const totalAmount = document.getElementById("total-amount")
    const totalAmountString = totalAmount.innerText;
    const totalAmountNumber = parseFloat(totalAmountString);

    if (totalWithdrawlAmount > totalAmountNumber) {
        alert("You Don't Have Sufficient Balance");
        return;
    }
    
    withdrawAmount.innerText = totalWithdrawlAmount;
    
    const finalAmount = totalAmountNumber - withdrawlFieldNumber;

   

    totalAmount.innerText = finalAmount;


    
})