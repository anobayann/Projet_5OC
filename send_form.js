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
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  //http://emailregex.com/
  const cart = JSON.parse(localStorage.getItem('cart'))
  let products = []
    for (let i in cart) {
      products.push(JSON.parse(cart[i]._id))}

  confirmButton.addEventListener("click", form_valid)
  

  function form_valid(e){
    e.preventDefault();

    if (products.length == 0){
     
      alert("Oups, vous avez oublié d'adopter un ourson")
    }
    else if (firstName.validity.valueMissing){
     
      firstNameMissing.textContent = "Prenom manquant"
      firstNameMissing.style.color = "red";
    }
    else if(firstName.value.length < 2 || firstName.value.length > 20){
     
      firstNameMissing.textContent = "Le prenom doit contenir 2 lettres minimum et 20 lettres maximum"
      firstNameMissing.style.color = "darkorange";
    
    }
    else if (lastName.validity.valueMissing){
     
      lastNameMissing.textContent = "Nom manquant"
      lastNameMissing.style.color = "red";
    }
    else if(lastName.value.length < 2 || lastName.value.length > 25){
     
      lastNameMissing.textContent = "Le nom doit contenir 2 lettres minimum et 20 lettres maximum"
      lastNameMissing.style.color = "darkorange";
    
    }
    else if (address.validity.valueMissing){
     
      addressMissing.textContent = "Adresse manquante"
      addressMissing.style.color = "red";
    }
    else if(address.value.length < 6 ){
     
      addressMissing.textContent = "L'adresse doit contenir au moins 6 characteres"
      addressMissing.style.color = "darkorange";
    
    }
    else if (city.validity.valueMissing){
     
      cityMissing.textContent = "Ville manquante"
      cityMissing.style.color = "red";
    }
    else if(city.value.length < 2 || city.value.length > 35){
     
      cityMissing.textContent = "Le nom de la ville doit contenir 2 lettres minimum et 35 lettres maximum"
      cityMissing.style.color = "darkorange";
    }
    else if (email.validity.valueMissing){
     
      emailMissing.textContent = "Adresse email manquante"
      emailMissing.style.color = "red";
    }
    else if(emailRegex.test(email.value)== false){
     
      emailMissing.textContent = "Format incorrect"
      emailMissing.style.color = "darkorange";
    }
    else{
      sendToServer()
    }
  }

//Fonction pour confirmer l'achat

  function sendToServer(){
  
    const headers = {'Content-Type': 'application/json'} 
    const firstNameValue = document.getElementById('first_name').value
    const lastNameValue = document.getElementById('last_name').value
    const addressValue = document.getElementById('address').value
    const cityValue = document.getElementById('city').value
    const emailValue = document.getElementById('email').value
    const contact = {'firstName': firstNameValue, 'lastName': lastNameValue, 'address': addressValue, 'city': cityValue, 'email': emailValue}
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
        .then(res =>{
      
            res.json().then(result => {
                if (result.orderId) {
                 
                   window.location.href = 'confirmation.html?_=' + result.orderId 
                 }
                else {
                  throw "Oops on arrive pas a recuperer l'Id final?"
                  
                 }
              })
        .catch (err => {
          console.error(err)
          alert("Veillez remplir tout les champs svp")
        })
})
  }

/*.then(function (response) {
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
}*/

        
 


        

        