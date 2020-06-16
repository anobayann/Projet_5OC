// cree un row
function makeHtml() {

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
      <td class="text-center priceFor1"></td>
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
      quantityOfTeddy.appendChild(document.createElement('select'))
      quantityOfTeddy.classList.add('text-center')
      const selectTeddies = document.querySelector('#tableMother select')
      selectTeddies.classList.add('custom-select', 'col-9', 'col-lg-6')
      selectTeddies.appendChild(document.createElement('option'))
      selectTeddies.appendChild(document.createElement('option'))
      selectTeddies.appendChild(document.createElement('option'))
      const option1 = document.querySelector('#tableMother option')
      option1.classList.add('value=1')
      const option2 = option1.nextElementSibling
      const option3 = option2.nextElementSibling
      option2.classList.add('value=2')
      option3.classList.add('value=3')
      option1.innerHTML = '1'
      option2.innerHTML = '2'
      option3.innerHTML = '3'
      const priceOfTeddy = quantityOfTeddy.nextElementSibling
      priceOfTeddy.classList.add('priceFor1', 'text-center')
    
    }
makeHtml();


// Ajouter produit au panier en clonant la ligne
function addToCart(){
  
  const cart = JSON.parse(localStorage.getItem('cart')) // on recupere notre panier dans local storage
   
    for (let item in cart) { 
        const eachName = document.querySelectorAll(".cart_name")
        const eachPrice = document.querySelectorAll(".priceFor1")
        const lastRow = document.querySelector("#tableMother").lastChild
        const clone = lastRow.cloneNode(true)

        document.querySelector("#tableMother").appendChild(clone)
        eachName[item].innerHTML = JSON.parse(cart[item].name)
        eachPrice[item].innerHTML = JSON.parse(cart[item].price) + ' pesos'
    }
  tableMother.removeChild(tableMother.lastChild) //on supprime la ligne cree au debut
}
addToCart();

// Prix total
function totalPrice(){

  const cart = JSON.parse(localStorage.getItem('cart'))
  const totalPrice = document.querySelector('#totalPrice')
  let sum = 0

    for (let i in cart){

        let allPrice = JSON.parse(cart[i].price) 
        sum += allPrice
        totalPrice.innerHTML = "Prix total = " + sum + " pesos"
 
          //recupere la quantite d un produit
          document.querySelector('.custom-select').addEventListener("change", function(e) {
          (console.log(e.target.value))});
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



