//Fonction pour confirmer l'achat

  function sendToServer(){
  
    const headers = {'Content-Type': 'application/json'} 
    const firstName = document.getElementById('first_name').value
    const lastName = document.getElementById('last_name').value
    const address = document.getElementById('address').value
    const city = document.getElementById('city').value
    const email = document.getElementById('email').value
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
                 
                   window.location.href = 'confirmation.html?_=' + result.orderId
                   
                 }
                else {
                  alert("Veillez remplir tout les champs svp")
                 }
              })
        .catch (function (error) {
              console.log('Request failed', error);
        })
}

        
function confirmOnClick(){ 

          const confirmButton = document.querySelector('#confirm')
          confirmButton.addEventListener("click", function(event){
      
            event.preventDefault(); //sinon ca marche pas
            
            sendToServer();
          })
        }
    confirmOnClick()
        

        