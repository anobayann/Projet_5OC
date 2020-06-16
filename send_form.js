


function confirmOnClick(){
    const cart = JSON.parse(localStorage.getItem('cart'))
    const confirmButton = document.querySelector('#confirm')
    confirmButton.addEventListener("click", function(){
      confirm();
    })
  }
  confirmOnClick()
  
  function confirm(){

    
    const headers = { 'Accept': 'application/json', 'Content-Type': 'application/json'}
    const firstName = document.getElementById('validationServer01').value
    const lastName = document.getElementById('validationServer02').value
    const address = document.getElementById('validationServer06').value
    const city = document.getElementById('validationServer03').value
    const email = document.getElementById('validationServerEmail').value
    const contact = {'firstName': firstName, 'lastName': lastName, 'address': address, 'city': city, 'email': email}
    const cart = JSON.parse(localStorage.getItem('cart'))
    let products = []
    for (let i in cart) {
      products.push(JSON.parse(cart[i]._id))
    }
    fetch('http://localhost:3000/api/teddies/order', {
      method: 'post',
      headers: headers,
      body: JSON.stringify({
        contact: contact,
        products: products,
      })
    })
    .then(function (response) {
      return response.json();
    })
    .then(function (result) {
      if (result.orderId) {
        //alert("Commande confirmée !!! \r\n\r\nOrderId : " + result.orderId + '\r\n\r\nPrix total : 1000 boules')
        window.location.href = 'confirmation.html?_=' + result.orderId
      }
      else {
        alert("FAIL !!! Vérifie ton addresse de contact")
      }
    })
    .catch (function (error) {
      console.log('Request failed', error);
    })
  }