//on recupere les elements du DOM
const teddyName = document.querySelector('#teddyName')
const teddyDescription = document.querySelector('#teddyDescription')
const teddyPrice = document.querySelector('#teddyPrice')
const teddyPic = document.querySelector('#teddyPic')
const teddyColors = document.querySelector('#teddyColors')
const errorMessage = document.querySelector('.card')
const button = document.querySelector('#btn')


function error(){
  errorMessage.innerHTML = "Nos articles sont indisponibles pour le moments, notre serveur est en maintenance pour vous offrir un meilleur service :D A bientot..";
}


// cree fonction pour afficher le teddy selectione dans le DOM avec ces characterisitques
function display(teddySelected) {
 
    // insertion des specifites des teddies
    teddyName.innerHTML = '<strong>NOM</strong>: ' + teddySelected.name
    teddyDescription.innerHTML = '<strong>DESCRIPTION</strong>: ' + teddySelected.description
    teddyPrice.innerHTML = '<strong>PRIX</strong>: ' + teddySelected.price +" pesos"
    teddyPic.src = teddySelected.imageUrl


    //patxi methode
    // recuperer elemt select
    //vider le select
    // ajouter les couleurs(boucle for ou foreach)

    //my method
    //on fai une boucle pour recuperer chaque couleur du teddy selectionne
    //on lui fai un gosse par couleur (option)
    //on ajoute les couleurs dans chaque gosses
    for (let color in teddySelected.colors){

      teddyColors.appendChild(document.createElement('option'))
      let colorsOption = document.querySelectorAll('#teddyColors option')
      colorsOption[color].innerHTML = teddySelected.colors[color]
    }

  
    // fonction qui envoi au local storage l'id, le nom et le prix au clic du bouton panier  
    button.addEventListener("click", function() {

      //on recupere ou on cree la cle 'cart' du localStorage 
      const addTeddy = JSON.parse(localStorage['cart'] || "[]");
      const qty = document.querySelector('#qty')

      addTeddy.push({ //on y push le teddy avec ces caraceristik
        _id: JSON.stringify(teddySelected._id), //3 champs de l obj
        name: JSON.stringify(teddySelected.name),
        price: JSON.stringify(teddySelected.price),
        quantity: qty.value
        
        
      });
      console.log(qty.value);
        // on ajoute la valeur (l objet(teddy)) a la cle(panier cart)
        localStorage.setItem('cart', JSON.stringify(addTeddy)) 

        //JSON.stringify OBJET JS => chaine json
        //JSON.parse chaine json => objet js
    })
}


// Faire une requete pour recuperer les infos du teddy selectionne, puis on appel la fonction et hop!

fetch('http://localhost:3000/api/teddies')
    .then(res =>  {
          
      if (res.ok){
           res.json().then(teddies =>{
   
                if (document.URL.indexOf("personaliser.html?_norbert") >= 0){ // 22? pourquoi? si -1 false
                teddySelected = teddies[0];
                }
                else if (document.URL.indexOf("personaliser.html?_arnold") >= 0){
                teddySelected = teddies[1];
                }
                else if (document.URL.indexOf("personaliser.html?_lenny-and-carl") >= 0){
                teddySelected = teddies[2];
                }
                else if (document.URL.indexOf("personaliser.html?_gustav") >= 0){
                teddySelected = teddies[3];
                }
                else if (document.URL.indexOf("personaliser.html?_garfunkel") >= 0){
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

    //PB message d'erreur trop long


    