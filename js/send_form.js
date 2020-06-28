        // Variables qui vont servir dans nos fonctions
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
        //http://emailregex.com/
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        //Recuperation du pannier via le localStorage
const cart = JSON.parse(localStorage.getItem('cart'))
        //Creation de l'array produit ou l'on y pousse nos id.
let products = []
  for (let i in cart) {
    products.push(JSON.parse(cart[i]._id))
  }
      //Evenement qui va envoyer nos données au serveur et nous rediriger vers la page de confirmation
confirmButton.addEventListener("click", form_valid)

      // fonction crée afin de afin de valider nos données avant l'envoi au serveur
function form_valid(e){
  e.preventDefault();  //Pour que ce soit javascript qui verifie et envoi le formulaire et non html      
    if (products.length == 0){// si le pannier est vide
      alert("Oups, vous avez oublié d'adopter un ourson")
    }
    else if (firstName.validity.valueMissing){
      firstNameMissing.textContent = "Prenom manquant"
      firstNameMissing.style.color = "red"
      firstName.style.border = "thin solid red"
    }
    else if(firstName.value.length < 2 || firstName.value.length > 20){
      firstNameMissing.textContent = "Le prenom doit contenir entre 2 et 20 lettres"
      firstNameMissing.style.color = "darkorange"
      firstName.style.border = "thin solid darkorange"
    }
    else if (lastName.validity.valueMissing){
      lastNameMissing.textContent = "Nom manquant"
      lastNameMissing.style.color = "red"
      lastName.style.border = "thin solid red"
    }
    else if(lastName.value.length < 2 || lastName.value.length > 25){
      lastNameMissing.textContent = "Le nom doit contenir entre 2 et 20 lettres"
      lastNameMissing.style.color = "darkorange"
      lastName.style.border = "thin solid darkorange"
    }
    else if (address.validity.valueMissing){
      addressMissing.textContent = "Adresse manquante"
      addressMissing.style.color = "red"
      address.style.border = "thin solid red"
    }
    else if(address.value.length < 6 ){
      addressMissing.textContent = "L'adresse doit contenir au moins 6 characteres"
      addressMissing.style.color = "darkorange"
      address.style.border = "thin solid darkorange"
    }
    else if (city.validity.valueMissing){
      cityMissing.textContent = "Ville manquante"
      cityMissing.style.color = "red"
      city.style.border = "thin solid red"
    }
    else if(city.value.length < 2 || city.value.length > 35){
      cityMissing.textContent = "Le nom de la ville doit contenir entre 2 et 35 lettres maximum"
      cityMissing.style.color = "darkorange"
      city.style.border = "thin solid darkorange"
    }
    else if (email.validity.valueMissing){
      emailMissing.textContent = "Adresse email manquante"
      emailMissing.style.color = "red"
      email.style.border = "thin solid red"
    }
    else if(emailRegex.test(email.value)== false){
      emailMissing.textContent = "Format incorrect"
      emailMissing.style.color = "darkorange"
      email.style.border = "thin solid darkorange"
    }
    else{
      sendToServer()
    }
}

      //Fonction pour envoyer les données au serveur
function sendToServer(){
  const headers = {'Content-Type': 'application/json'} 
  const firstNameValue = document.getElementById('first_name').value
  const lastNameValue = document.getElementById('last_name').value
  const addressValue = document.getElementById('address').value
  const cityValue = document.getElementById('city').value
  const emailValue = document.getElementById('email').value
  const contact = {'firstName': firstNameValue, 'lastName': lastNameValue, 'address': addressValue, 'city': cityValue, 'email': emailValue}
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
          if (result.orderId) {// si la requete nous fournit un numero ID   
            window.location.href = 'confirmation.html?_id=' + result.orderId   // On se redirige vers la page de confirmation avec le numero Id dans l'URL
          }
          else {
            throw "Oops on arrive pas a recuperer l'Id final?"
          }
        })
      })
      .catch (err => {
        console.error(err)
        alert("Veillez remplir tout les champs svp")
      })      
}


 


        

        