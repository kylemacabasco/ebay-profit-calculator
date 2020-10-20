// Listen for submit
document.getElementById('ebay-profit-form').addEventListener('submit', function (e) {
  // Hide results
  document.getElementById('results').style.display = 'none';


  // Show loader
  document.getElementById('loading').style.display = 'block';

  setTimeout(calculateResults, 2000);


  e.preventDefault()
})

//Calculate Results
function calculateResults() {
  
  // UI Vars
  const grossSale = document.getElementById('gross-sale');
  const shippingCost = document.getElementById('shipping-cost');
  const costOfItem = document.getElementById('cost-of-item');
  const profit = document.getElementById('profit');
  const totalAmount = document.getElementById('total-amount');

  const principal = parseFloat(grossSale.value);
  const shipping = parseFloat(shippingCost.value);
  const item = parseFloat(costOfItem.value);
  const ebayFee = (principal * .10).toFixed(2)
  const paypalFee = ((principal * .029) + .30).toFixed(2)


  // Compute total amount 
  const total = principal - ebayFee - paypalFee - shipping

  if (isFinite(total)) {
    totalAmount.value = total.toFixed(2);
    profit.value = (total - item).toFixed(2);

    // Show results
    document.getElementById('results').style.display = 'block';

    // Hide loader
    document.getElementById('loading').style.display = 'none';


  } else {
    showError('Please check your numbers');
  }



}

// Show error
function showError(error) {

  // Hide results
  document.getElementById('results').style.display = 'none';

  // Hide loader
  document.getElementById('loading').style.display = 'none';

  //Create div
  const errorDiv = document.createElement('div');

  // Get elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  // Add class
  errorDiv.className = 'alert alert-danger';

  // Create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  // Insert error above heading
  card.insertBefore(errorDiv, heading);

  // Clear error after 3 seconds
  setTimeout(clearError, 3000);
}

// Clear error
function clearError() {
  document.querySelector('.alert').remove();
}
