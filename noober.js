window.addEventListener('DOMContentLoaded', async function() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write the recipe (algorithm), then write the code
  
  // Create a variable for product data
  let rideRequest = json

  // Loop through the data
  for (i=0, i<rideRequest.length, i++){

    // Create a variable to store each data point
    let passengerDetail = rideRequest[i].passengerDetail
    let passengerNumber = rideRequest[i].numberOfPassengers
    let dropoffLocation = rideRequest[i].dropoffLocation
    let pickupLocation = rideRequest[i].pickupLocation
    let purpleRequest = rideRequest[i].purpleRequested

    // Create a variable for HTML element that we will add to the page
    let element = document.querySelector(`.rides`)

    // Insert HTML into the page, using the product data
    element.insertAdjacentHTML(`beforeend`,
    
    

    )
  }
  )}

