//confirmOnClick(){ 

  

  const confirmButton = document.querySelector('#confirm')
  const firstName = document.querySelector('#first_name')
  const firstNameMissing = document.querySelector('#first_name_missing')
  const lastName = document.querySelector('#last_name')
  const lastNameMissing = document.querySelector('#last_name_missing')
  const address = document.querySelector('#address')
  const addressMissing = document.querySelector('#address_missing')
  const city = document.querySelector('#city')
  const cityMissing = document.querySelector('#city_missing')  
  const email = document.querySelector('#email')
  const emailMissing = document.querySelector('#email_missing')
  const emailRegexe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  //http://emailregex.com/
  const cart = JSON.parse(localStorage.getItem('cart'))
  let products = []
    for (let i in cart) {
      products.push(JSON.parse(cart[i]._id))}
  confirmButton.addEventListener("click", form_valid)
  

  function form_valid(e){
    if (products.length == 0){
      e.preventDefault();
      alert("Oups, vous avez oublié d'adopter un ourson")
    }
    else if (firstName.validity.valueMissing){
      e.preventDefault();
      firstNameMissing.textContent = "Prenom manquant"
      firstNameMissing.style.color = "red";
    }
    else if(firstName.value.length < 2 || firstName.value.length > 20){
      e.preventDefault();
      firstNameMissing.textContent = "Le prenom doit contenir 2 lettres minimum et 20 lettres maximum"
      firstNameMissing.style.color = "darkorange";
    
    }
    else if (lastName.validity.valueMissing){
      e.preventDefault();
      lastNameMissing.textContent = "Nom manquant"
      lastNameMissing.style.color = "red";
    }
    else if(lastName.value.length < 2 || lastName.value.length > 25){
      e.preventDefault();
      lastNameMissing.textContent = "Le nom doit contenir 2 lettres minimum et 20 lettres maximum"
      lastNameMissing.style.color = "darkorange";
    
    }
    else if (address.validity.valueMissing){
      e.preventDefault();
      addressMissing.textContent = "Adresse manquante"
      addressMissing.style.color = "red";
    }
    else if(address.value.length < 6 ){
      e.preventDefault();
      addressMissing.textContent = "L'adresse doit contenir au moins 6 characteres"
      addressMissing.style.color = "darkorange";
    
    }
    else if (city.validity.valueMissing){
      e.preventDefault();
      cityMissing.textContent = "Ville manquante"
      cityMissing.style.color = "red";
    }
    else if(city.value.length < 2 || city.value.length > 35){
      e.preventDefault();
      cityMissing.textContent = "Le nom de la ville doit contenir 2 lettres minimum et 35 lettres maximum"
      cityMissing.style.color = "darkorange";
    }
    else if (email.validity.valueMissing){
      e.preventDefault();
      emailMissing.textContent = "Adresse email manquante"
      emailMissing.style.color = "red";
    }
    else if(emailRegexe.test(email.value)== false){
      e.preventDefault();
      emailMissing.textContent = "Format incorrect"
      emailMissing.style.color = "darkorange";
    }
    else{
      sendToServer()
    }
  }
   
  

//  confirmOnClick()





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

        
 


        

        