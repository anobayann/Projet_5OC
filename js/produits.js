      // Fetch pour obtenir les characteristiques de teddy selectionne
function getTheTeddy(){
  // Faire une requete pour recuperer les infos du teddy selectionne, puis on appel la fonction et hop!
  fetch('http://localhost:3000/api/teddies')
    .then(res =>  {
      if (res.ok){
        res.json().then(teddies =>{
          if (document.URL.indexOf("personnaliser.html?_norbert") >= 0){ 
            teddySelected = teddies[0];
          }
          else if (document.URL.indexOf("personnaliser.html?_arnold") >= 0){
            teddySelected = teddies[1];
          }
          else if (document.URL.indexOf("personnaliser.html?_lenny-and-carl") >= 0){
            teddySelected = teddies[2];
          }
          else if (document.URL.indexOf("personnaliser.html?_gustav") >= 0){
            teddySelected = teddies[3];
          }
          else if (document.URL.indexOf("personnaliser.html?_garfunkel") >= 0){
            teddySelected = teddies[4];
          }
          else {
            error();
          }
            display(teddySelected);
          })
      }
      else {
        throw "L'adresse URL de l'API est incorrect"
      }
    })
    .catch(err => {
      console.error(err);
      error()
    })
}
getTheTeddy() 

      // Creation d'un message d'erreur en cas de probleme pour recuperer produit dans l'Api
function error(){
  const errorMessage = document.querySelector('.card')
  errorMessage.innerHTML = "Nos articles sont indisponibles pour le moments, notre serveur est en maintenance pour vous offrir un meilleur service :D A bientot..";
}

      // cree fonction pour afficher le teddy selectione dans le DOM avec ces characterisitques
function display(teddySelected) {
          //on recupere les elements du DOM
  const teddyName = document.querySelector('#teddyName')
  const teddyDescription = document.querySelector('#teddyDescription')
  const teddyPrice = document.querySelector('#teddyPrice')
  const teddyPic = document.querySelector('#teddyPic')
  const teddyColors = document.querySelector('#teddyColors')
          // insertion des characteristiques du teddy selectionner
  teddyName.innerHTML = '<strong>NOM</strong>: ' + teddySelected.name
  teddyDescription.innerHTML = '<strong>DESCRIPTION</strong>: ' + teddySelected.description
  teddyPrice.innerHTML = '<strong>PRIX</strong>: ' + teddySelected.price +" pesos"
  teddyPic.src = teddySelected.imageUrl
          // inesrtion des couleurs de maniere dynamique, 
  for (let color in teddySelected.colors){
    teddyColors.appendChild(document.createElement('option')) //on cree avec le DOM, des balises options pour chaque couleur de teddy
    let colorsOption = document.querySelectorAll('#teddyColors option') //on les recuperent toutes
    colorsOption[color].innerHTML = teddySelected.colors[color] // on y ajoute les couleurs
  }
}
      // Ajout au local storage(puis panier voir code panier.js) eu click sur le bouton ajouter au panier
function addToLocalstorage(){
  const button = document.querySelector('#btn')  
  button.addEventListener("click", function() { // fonction qui envoi au local storage l'id, le nom et le prix au clic du bouton panier   
    const addTeddy = JSON.parse(localStorage['cart'] || "[]")  //on recupere ou on cree la cle 'cart' du localStorage   
    const qty = document.querySelector('#qty') // on cree l'objet product qui represente le teddy selectionne et ses characteristiques
    let product = {
      _id: JSON.stringify(teddySelected._id), 
      name: JSON.stringify(teddySelected.name),
      price: JSON.stringify(teddySelected.price),
      quantity: parseInt(qty.value, 10)    
      }     
        let exisisting = addTeddy.find(item => item._id == product._id)  // creation d'une variable pour verifier si le produit est deja dans le panier avec son _id  
          if (exisisting){  // si le produit existe on additionne juste sa quantite sinon on ajoute le nouveau produit
            exisisting.quantity += product.quantity
          }
          else{
            addTeddy.push(product)
          }            
    localStorage.setItem('cart', JSON.stringify(addTeddy))   // on ajoute la valeur (l objet(teddy)) a la cle(panier cart) au localStorage
  })
}
addToLocalstorage();   