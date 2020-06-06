const panier_name = document.querySelector('#panier_name')
const panier_price = document.querySelector('#pricefor1')

fetch('http://localhost:3000/api/teddies')
.then(res =>  {
    
    if (res.ok){
        res.json().then(data =>{

            //localStorage.setItem ()// ??????????????

            if (document.URL.indexOf("panier.html?_norbert") >= 0){

                panier_name.innerHTML = data[0].name
                panier_price.innerHTML = data[0].price + " pesos"

            }
            else if (document.URL.indexOf("panier.html?_arnold") >= 0){
                panier_name.innerHTML = data[1].name
                panier_price.innerHTML = data[1].price + " pesos"
            }
            else if (document.URL.indexOf("panier.html?_lenny-and-carl") >= 0){
                panier_name.innerHTML = data[2].name
                panier_price.innerHTML = data[2].price + " pesos"
            }
            else if (document.URL.indexOf("panier.html?_gustav") >= 0){
                panier_name.innerHTML = data[3].name
                panier_price.innerHTML = data[3].price + " pesos"
            }
            else if (document.URL.indexOf("panier.html?_garfunkel") >= 0){
                panier_name.innerHTML = data[4].name
                panier_price.innerHTML = data[4].price + " pesos"
            }




        })}
    else {

    }
    })