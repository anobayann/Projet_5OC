   
   

const clear_cart = document.querySelector('#clear_button')

clear_cart.addEventListener("click", function(){
       localStorage.clear();})
   
   
   if (localStorage ) {

        
           const tableMother = document.querySelector('#tableMother')
        
           tableMother.appendChild(document.createElement('tr')) 
        
           const tableRow = document.querySelector('#tableMother tr')
        
        
           tableRow.appendChild(document.createElement('th'));
           tableRow.appendChild(document.createElement('td'));
           tableRow.appendChild(document.createElement('td'));
        
           const nameOfTeddy = document.querySelector('#tableMother th')
        
            nameOfTeddy.setAttribute("scope", "row");
            nameOfTeddy.classList.add("cart_name")
        
            const quantityOfTeddy = document.querySelector('#tableMother td')
        
            quantityOfTeddy.appendChild(document.createElement('select'))
        
            const selectTeddies = document.querySelector('#tableMother select')
        
            selectTeddies.classList.add('custom-select', 'col-9', 'col-lg-6')
        
        
        
            selectTeddies.appendChild(document.createElement('option'))
            selectTeddies.appendChild(document.createElement('option'))
            selectTeddies.appendChild(document.createElement('option'))
            selectTeddies.appendChild(document.createElement('option'))
        
            const option1 = document.querySelector('#tableMother option')
        
           option1.classList.add('selected', 'value=1')
        
            const option2 = option1.nextElementSibling
            const option3 = option2.nextElementSibling
        
            option2.classList.add('value=2')
            option3.classList.add('value=3')
        
            option1.innerHTML = '1'
            option2.innerHTML = '2'
            option3.innerHTML = '3'
        
            const priceOfTeddy = quantityOfTeddy.nextElementSibling
        
            priceOfTeddy.classList.add('priceFor1')

            
            const tableRow2 = tableRow.cloneNode (true)
                 tableMother.appendChild(tableRow2)    




            const cart = JSON.parse(localStorage.getItem('cart'))
//             if (cart) {
//                 for (let i in cart) { // 
//             panier_name.innerHTML += cart[i].name + "<br>";
//             pricefor1.innerHTML +=  cart[i].price + "<br>";
//   }
// }

            const cart_name = document.querySelector('.cart_name')
            const cart_price = document.querySelector('.priceFor1')
            cart_name.innerHTML = JSON.parse(cart[0].name)
            cart_price.innerHTML = JSON.parse(cart[0].price)
            const cart_name1 = document.querySelector('tableRow2 .cart_name')
            cart_name1.innerHTML = JSON.parse(cart[1].name)
            
            






   }

   


