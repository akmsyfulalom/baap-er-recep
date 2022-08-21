/*
1. add event listner to the deposit
2. get deposit amount from the deposit field
2.5. convart string to deposit amount to a number type 
3. clear the deposit input field after getting value
4. previous deposit total 
5. calculate new deposit total and set the value to the deposit total 
6. get current balance 
7. calculate the new balance and set it to the balance total amount
*/

//  step 1
document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field');
    // step 2
    const newDepositAmountString = depositField.value;
    // step 2.5
    const newDepositAmount = parseFloat(newDepositAmountString);

    //  step 3
    depositField.value = '';

    // step 4
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalStrung = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalStrung);

    //step  5
    const mewDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = mewDepositTotal;

    // step 6
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalString);

    // step 7
    const newBalanceTotal = previousBalanceTotalAmount + newDepositAmount;
    balanceTotalElement.innerText = newBalanceTotal;

})