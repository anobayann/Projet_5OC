//on recupere les elements du DOM
const teddyName = document.querySelector('#teddyName')
const teddyDescription = document.querySelector('#teddyDescription')
const teddyPrice = document.querySelector('#teddyPrice')
const teddyPic = document.querySelector('#teddyPic')
const errorMessage = document.querySelector('.card')
const button = document.querySelector('#btn')

// on cree un array pour les couleurs du DOM
const teddyColors = []
teddyColors.push(document.querySelector('#color1')) //[0]
teddyColors.push(document.querySelector('#color2')) //[1]
teddyColors.push(document.querySelector('#color3')) //[2]
teddyColors.push(document.querySelector('#color4')) //[3]




// cree fonction pour afficher le teddy selectione dans le DOM avec ces characterisitques
function display(teddySelected) {
 
    // insertion des specifites des teddies
    teddyName.innerHTML = '<strong>NOM</strong>: ' + teddySelected.name
    teddyDescription.innerHTML = '<strong>DESCRIPTION</strong>: ' + teddySelected.description
    teddyPrice.innerHTML = '<strong>PRIX</strong>: ' + teddySelected.price +" pesos"
    teddyPic.src = teddySelected.imageUrl

    // boucle pour enlever les 'champs sans couleurs' et ajouter les couleurs de chacuns..
    for (let i=0; i<4 ; i++ ){
      if (!teddySelected.colors[i]) {
         teddyColors[i].remove();
         }
      else {
         teddyColors[i].innerHTML = teddySelected.colors[i]
         }
    }
  
    // fonction qui envoi au local storage l'id, le nom et le prix au clic du bouton panier  
    button.addEventListener("click", function() {
      const addTeddy = JSON.parse(localStorage['cart'] || "[]");//on recupere || cree un panier kon fou ds la constante addTeddy
      addTeddy.push({ //on push dans un objet(le teddy avec ces caraceristik) ds l array cart 
        _id: JSON.stringify(teddySelected._id), //3 champs de l obj
        name: JSON.stringify(teddySelected.name),
        price: JSON.stringify(teddySelected.price)
      });
        
        localStorage.setItem('cart', JSON.stringify(addTeddy)) // on ajoute la valeur (l objet(teddy)) a la cle(panier cart)
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
                erreur.innerHTML = "Nos articles sont indisponibles pour le moments, notre serveur est en maintenance pour vous offrir un meilleur service :D A bientot..";
                }
                display(teddySelected);
                })
      }
      else {
      erreur.innerHTML = "Nos articles sont indisponibles pour le moments, notre serveur est en maintenance pour vous offrir un meilleur service :D A bientot..";
      }
      })
