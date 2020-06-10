// const cart_name = document.querySelector('.cart_name')
// const cart_price = document.querySelector('.pricefor1')


// //     <tr>
// //          <th scope="row">bao</th>
// //          <td>
// //              <select class="custom-select col-9 col-lg-6 ">
// //                  <option selected>0</option>
// //                  <option value="1">1</option>
// //                  <option value="2">2</option>
// //                  <option value="3">3</option>
// //              </select>
// //          </td>
//  //   
// //          <td>50 euros</td>
// //          
// //      </tr>







// const clear_cart = document.querySelector('#clear_cart')

// clear_cart.addEventListener("click", function(){
//         localStorage.clear();


// })

// // const cart = JSON.parse(localStorage.getItem('cart'))
// // if (cart) {
// //         for (let i in cart) {
// //           panier_name.innerHTML += cart[i].name + "<br>";
// //           pricefor1.innerHTML +=  cart[i].price + "<br>";
// //         }
// //       }




// if (localStorage.length == 3) {

        
//         const tableMother = document.querySelector('#tableMother')
        
//         tableMother.appendChild(document.createElement('tr')) 
        
//         const tableRow = document.querySelector('#tableMother tr')
        
        
//         tableRow.appendChild(document.createElement('th'));
//         tableRow.appendChild(document.createElement('td'));
//         tableRow.appendChild(document.createElement('td'));
        
//         const nameOfTeddy = document.querySelector('#tableMother th')
        
//          nameOfTeddy.setAttribute("scope", "row");
//          nameOfTeddy.classList.add("cart_name")
        
//          const quantityOfTeddy = document.querySelector('#tableMother td')
        
//          quantityOfTeddy.appendChild(document.createElement('select'))
        
//          const selectTeddies = document.querySelector('#tableMother select')
        
//          selectTeddies.classList.add('custom-select', 'col-9', 'col-lg-6')
        
        
        
//          selectTeddies.appendChild(document.createElement('option'))
//          selectTeddies.appendChild(document.createElement('option'))
//          selectTeddies.appendChild(document.createElement('option'))
//          selectTeddies.appendChild(document.createElement('option'))
        
//          const option1 = document.querySelector('#tableMother option')
        
//         option1.classList.add('selected', 'value=1')
        
//          const option2 = option1.nextElementSibling
//          const option3 = option2.nextElementSibling
        
//          option2.classList.add('value=2')
//          option3.classList.add('value=3')
        
//          option1.innerHTML = '1'
//          option2.innerHTML = '2'
//          option3.innerHTML = '3'
        
//          const priceOfTeddy = quantityOfTeddy.nextElementSibling
        
//          priceOfTeddy.classList.add('priceFor1')

//          const cart_name = document.querySelector('.cart_name')
//         cart_name.innerHTML = JSON.parse(localStorage.getItem(1))


// }

// else if (localStorage.length == 6){

//         const tableMother = document.querySelector('#tableMother')
        
//         tableMother.appendChild(document.createElement('tr')) 
        
//         const tableRow = document.querySelector('#tableMother tr')
        
        
//         tableRow.appendChild(document.createElement('th'));
//         tableRow.appendChild(document.createElement('td'));
//         tableRow.appendChild(document.createElement('td'));
        
//         const nameOfTeddy = document.querySelector('#tableMother th')
        
//          nameOfTeddy.setAttribute("scope", "row");
//          nameOfTeddy.classList.add("cart_name")
        
//          const quantityOfTeddy = document.querySelector('#tableMother td')
        
//          quantityOfTeddy.appendChild(document.createElement('select'))
        
//          const selectTeddies = document.querySelector('#tableMother select')
        
//          selectTeddies.classList.add('custom-select', 'col-9', 'col-lg-6')
        
        
        
//          selectTeddies.appendChild(document.createElement('option'))
//          selectTeddies.appendChild(document.createElement('option'))
//          selectTeddies.appendChild(document.createElement('option'))
//          selectTeddies.appendChild(document.createElement('option'))
        
//          const option1 = document.querySelector('#tableMother option')
        
//         option1.classList.add('selected', 'value=1')
        
//          const option2 = option1.nextElementSibling
//          const option3 = option2.nextElementSibling
        
//          option2.classList.add('value=2')
//          option3.classList.add('value=3')
        
//          option1.innerHTML = '1'
//          option2.innerHTML = '2'
//          option3.innerHTML = '3'
        
//          const priceOfTeddy = quantityOfTeddy.nextElementSibling
        
//          priceOfTeddy.classList.add('priceFor1')


        
//         const tableRow2 = tableRow.cloneNode (true)
//         tableMother.appendChild(tableRow2)       
// }
// else if (localStorage.length == 9){

//         const tableMother = document.querySelector('#tableMother')
        
//         tableMother.appendChild(document.createElement('tr')) 
        
//         const tableRow = document.querySelector('#tableMother tr')
        
        
//         tableRow.appendChild(document.createElement('th'));
//         tableRow.appendChild(document.createElement('td'));
//         tableRow.appendChild(document.createElement('td'));
        
//         const nameOfTeddy = document.querySelector('#tableMother th')
        
//          nameOfTeddy.setAttribute("scope", "row");
//          nameOfTeddy.classList.add("cart_name")
        
//          const quantityOfTeddy = document.querySelector('#tableMother td')
        
//          quantityOfTeddy.appendChild(document.createElement('select'))
        
//          const selectTeddies = document.querySelector('#tableMother select')
        
//          selectTeddies.classList.add('custom-select', 'col-9', 'col-lg-6')
        
        
        
//          selectTeddies.appendChild(document.createElement('option'))
//          selectTeddies.appendChild(document.createElement('option'))
//          selectTeddies.appendChild(document.createElement('option'))
//          selectTeddies.appendChild(document.createElement('option'))
        
//          const option1 = document.querySelector('#tableMother option')
        
//         option1.classList.add('selected', 'value=1')
        
//          const option2 = option1.nextElementSibling
//          const option3 = option2.nextElementSibling
        
//          option2.classList.add('value=2')
//          option3.classList.add('value=3')
        
//          option1.innerHTML = '1'
//          option2.innerHTML = '2'
//          option3.innerHTML = '3'
        
//          const priceOfTeddy = quantityOfTeddy.nextElementSibling
        
//          priceOfTeddy.classList.add('priceFor1')

//          const tableRow2 = tableRow.cloneNode (true)
//         tableMother.appendChild(tableRow2) 

//         const tableRow3 = tableRow2.cloneNode (true)
//         tableMother.appendChild(tableRow3)
        
// }



const panier_name = document.querySelector('#panier_name')
const panier_price = document.querySelector('#pricefor1')
const clear_button = document.querySelector('#clear_button')
const cart = JSON.parse(localStorage.getItem('cart'))
if (cart) {
  for (let i in cart) {
    panier_name.innerHTML += cart[i].name + "<br>";
    pricefor1.innerHTML +=  cart[i].price + "<br>";
  }
}
else {
  panier_name.innerHTML = "empty"
}
clear_button.addEventListener("click", function() {
  //clear the storage
  localStorage.removeItem("cart");
  document.getElementById('panier_name').innerHTML = "storage cleared.";
})






