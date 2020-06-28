      // cree un row que l'on clonera et effacera par la suite avec la fonction addToCart()
function makeRow() {
  const tableMother = document.querySelector('#tableMother')
  tableMother.appendChild(document.createElement('tr'))
  const tableRow = document.querySelector('#tableMother tr')
  tableRow.appendChild(document.createElement('th'));
  tableRow.appendChild(document.createElement('td'));
  tableRow.appendChild(document.createElement('td'));
  const nameOfTeddy = document.querySelector('#tableMother th')
  nameOfTeddy.setAttribute('scope', 'row');
  nameOfTeddy.classList.add('cart_name', 'text-center')
  const quantityOfTeddy = document.querySelector('#tableMother td')
  quantityOfTeddy.classList.add('quantity', 'text-center', "pl-sm-5")
  const priceOfTeddy = quantityOfTeddy.nextElementSibling
  priceOfTeddy.classList.add('priceOfTeddy', 'text-center')  
}
makeRow();

      // Ajouter produits du localStorage au panier en clonant la ligne, ajoutant les informations 
function addToCart(){
  
  const cart = JSON.parse(localStorage.getItem('cart')) // on recupere notre panier dans local storage
  for (let item in cart) { 
    const eachName = document.querySelectorAll(".cart_name")
    const eachPrice = document.querySelectorAll(".priceOfTeddy")
    const eachQuantity = document.querySelectorAll(".quantity")
    const lastRow = document.querySelector("#tableMother").lastChild
    const clone = lastRow.cloneNode(true)
    document.querySelector("#tableMother").appendChild(clone) // on clone notre row
    eachName[item].innerHTML = JSON.parse(cart[item].name) // on y ajoute le nom
    eachPrice[item].innerHTML = JSON.parse((cart[item].price)*(cart[item].quantity)) + ' pesos' // on y ajoute le prix (prix unitaire X quantite du produit)
    eachQuantity[item].innerHTML = JSON.parse(cart[item].quantity)
  }
  tableMother.removeChild(tableMother.lastChild) //on supprime le premier row vide cree
}
addToCart();

      // Prix total
function totalPrice(){
  const cart = JSON.parse(localStorage.getItem('cart'))
  const totalPrice = document.querySelector('#totalPrice')
  let sum = 0
    for (let item in cart){
      const pricePerTeddy = JSON.parse((cart[item].price)*(cart[item].quantity))
      sum += pricePerTeddy
      }
  totalPrice.innerHTML = "Prix total : " + sum + " pesos"
}
totalPrice();

      // Vider la pannier
function clearCart(){         
  const clear_cart = document.querySelector('#clear_button')
  clear_cart.addEventListener("click", function(){
    localStorage.clear();
  })
}
clearCart()