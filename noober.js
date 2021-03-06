window.addEventListener('DOMContentLoaded', async function() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write the recipe (algorithm), then write the code
  
  // Create a variable for the product data
  let rideRequest = json

  // Loop through the data
  for (i=0; i<rideRequest.length; i++){

    // Create a variable to store each data point
    let passengerName = `${rideRequest[i].passengerDetails.first} ${rideRequest[i].passengerDetails.last}`
    let passengerPhone = rideRequest[i].passengerDetails.phoneNumber
    let passengerNumber = rideRequest[i].numberOfPassengers
    let dropoffAddress = rideRequest[i].dropoffLocation.address
    let dropoffCityStateZip = `${rideRequest[i].dropoffLocation.city}, ${rideRequest[i].dropoffLocation.state} ${rideRequest[i].dropoffLocation.zip}`
    let pickupAddress = rideRequest[i].pickupLocation.address
    let pickupCityStateZip = `${rideRequest[i].pickupLocation.city}, ${rideRequest[i].pickupLocation.state} ${rideRequest[i].pickupLocation.zip}`
    // Dectermine the service level
    let serviceLevel = ``
      if(rideRequest[i].purpleRequested == true){
      serviceLevel = `Noober Purple`
      } else if(passengerNumber>3){
      serviceLevel = `Noober XL`  
      } else {
      serviceLevel = `Noober X`
      }

    // Create a variable for HTML element that we will add to the page
    let element = document.querySelector(`.rides`)

    // Insert HTML into the page, using the product data
    
    if(serviceLevel == `Noober Purple`){
      element.insertAdjacentHTML(`beforeend`,

     `<h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      <i class="fas fa-car-side"></i>
      <span>Noober Purple</span>
     </h1>

     <div class="border-4 border-purple-500 p-4 my-4 text-left">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">${passengerName}</h2>
          <p class="font-bold text-gray-600">${passengerPhone}</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-gray-600 text-white p-2">
            ${passengerNumber} passengers
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p>${pickupAddress}</p>
          <p>${pickupCityStateZip}</p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>${dropoffAddress}</p>
          <p>${dropoffCityStateZip}</p>
        </div>
      </div>
     </div>`
    )}
    else if(passengerNumber>3){
      element.insertAdjacentHTML(`beforeend`,

       `<h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        <i class="fas fa-car-side"></i>
        <span>Noober <span class = "text-3xl"> XL </span></span>
       </h1>
  
       <div class="border-4 border-gray-900 p-4 my-4 text-left">
        <div class="flex">
          <div class="w-1/2">
            <h2 class="text-2xl py-1">${passengerName}</h2>
            <p class="font-bold text-gray-600">${passengerPhone}</p>
          </div>
          <div class="w-1/2 text-right">
            <span class="rounded-xl bg-gray-600 text-white p-2">
            ${passengerNumber} passengers
            </span>
          </div>
        </div>
        <div class="mt-4 flex">
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">PICKUP</div>
            <p>${pickupAddress}</p>
            <p>${pickupCityStateZip}</p>
          </div>
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">DROPOFF</div>
            <p>${dropoffAddress}</p>
            <p>${dropoffCityStateZip}</p>
          </div>
        </div>
       </div>`
      )}
    else {
      element.insertAdjacentHTML(`beforeend`,

       `<h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        <i class="fas fa-car-side"></i>
        <span>Noober X</span>
       </h1>
  
       <div class="border-4 border-gray-900 p-4 my-4 text-left">
        <div class="flex">
          <div class="w-1/2">
            <h2 class="text-2xl py-1">${passengerName}</h2>
            <p class="font-bold text-gray-600">${passengerPhone}</p>
          </div>
          <div class="w-1/2 text-right">
            <span class="rounded-xl bg-gray-600 text-white p-2">
            ${passengerNumber} passengers
            </span>
          </div>
        </div>
        <div class="mt-4 flex">
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">PICKUP</div>
            <p>${pickupAddress}</p>
            <p>${pickupCityStateZip}</p>
          </div>
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">DROPOFF</div>
            <p>${dropoffAddress}</p>
            <p>${dropoffCityStateZip}</p>
          </div>
        </div>
       </div>`
      )}
  
  }
})  