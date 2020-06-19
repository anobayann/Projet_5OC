// cree un row
function makeRow() {

  // creation d une ligne du tableau qui equivaut a 
/* <tr>
      <th scope="row" class="cart_name text-center" ></th>
      <td class="text-center">
          <select class="custom-select col-9 col-lg-6">
              <option selected value="1" >1</option>
              <option value="2">2</option>
              <option value="3">3</option>
          </select>
      </td>
      <td class="text-center priceOfTeddy"></td>
    </tr>  */
  
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
      quantityOfTeddy.appendChild(document.createElement('input'))
      quantityOfTeddy.classList.add('text-center')
      const inputQuantity = document.querySelector('#tableMother input')
      inputQuantity.classList.add( 'col-9', 'col-lg-2', 'text-center')
      inputQuantity.setAttribute('value', 1) 
      
      const priceOfTeddy = quantityOfTeddy.nextElementSibling
      priceOfTeddy.classList.add('priceOfTeddy', 'text-center')
    
    }
makeRow();


// Ajouter produit au panier en clonant la ligne
function addToCart(){
  
  const cart = JSON.parse(localStorage.getItem('cart')) // on recupere notre panier dans local storage
   
    for (let item in cart) { 
        const eachName = document.querySelectorAll(".cart_name")
        const eachPrice = document.querySelectorAll(".priceOfTeddy")
        const lastRow = document.querySelector("#tableMother").lastChild
        const clone = lastRow.cloneNode(true)

        document.querySelector("#tableMother").appendChild(clone) // on clone notre row
        eachName[item].innerHTML = JSON.parse(cart[item].name) // on y ajoute le nom
        eachPrice[item].innerHTML = JSON.parse(cart[item].price) + ' pesos' // on y ajoute le prix
    }
  tableMother.removeChild(tableMother.lastChild) //on supprime le premier row vide cree
}
addToCart();

function teddyPrice(){

  

}
// Prix total
function totalPrice(){

  const cart = JSON.parse(localStorage.getItem('cart'))
  let totalPrice = document.querySelector('#totalPrice')
  let eachPrice = document.querySelectorAll(".priceOfTeddy")
  let sum = 0

    for (let i in cart){
      // somme sans prendre en compte les quantites
      let allPrice = JSON.parse(cart[i].price)
      sum += allPrice
      totalPrice.innerHTML = "Prix total = " + sum + " pesos"
 
      //multiplie les quantites et le prix unitaire
          
      // const teddyQuantity = document.querySelectorAll('.custom-select')
      // teddyQuantity[i].addEventListener("change", function(e) {
        
        
      //   let newPrice = JSON.parse(e.target.value)*(JSON.parse(cart[i].price))
      //       eachPrice[i].innerHTML = newPrice + ' pesos'  
            
         // })         
        //comment additionner les nouvelles quantites??? eachPrice retourne nodeliste(object)
          console.log(JSON.stringify(eachPrice));
          
    }
  
}

totalPrice();



// Vider la pannier
function clearCart(){
    const cart = JSON.parse(localStorage.getItem('cart'))
    const clear_cart = document.querySelector('#clear_button')
    
    clear_cart.addEventListener("click", function(){
    localStorage.clear();
  })
}
clearCart()


