// A banking application needs to manage customer accounts and transactions. The user detail is stored in an
// object with a keys name and balance. Write functions using object methods to update a customer's account
// balance based on a deposit or withdrawal.



// Create a customer object with name and balance properties
const customer = {
    name: "Bharat",
    balance: 1000
};
  
// Function to deposit an amount into the customer's account
function deposit(amount) {
    customer.balance += amount;
    console.log(`Deposit of $${amount} successful. New balance is $${customer.balance}.`);
}
  
// Function to withdraw an amount from the customer's account
function withdraw(amount) {
    if (amount > customer.balance) {
      console.log(`Withdrawal of $${amount} failed. Insufficient funds.`);
    } else {
      customer.balance -= amount;
      console.log(`Withdrawal of $${amount} successful. New balance is $${customer.balance}.`);
    }
}

deposit(500);
withdraw(1000);