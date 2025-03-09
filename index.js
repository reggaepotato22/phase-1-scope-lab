// Write your solution in this file!
var customerName = 'bob';
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
  }
  function setBestCustomer() {
    bestCustomer = 'not bob'; // Declared globally (without var, let, or const)
  }
  function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
  }
  const leastFavoriteCustomer = 'someone';

  function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'anyone'; // This will cause an error
  }
        