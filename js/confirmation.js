function confirmation(){
    const confirmMessage = document.querySelector('#confirmMessage')
          //On recupere l'Id dans l'URL
    let params = (new URL(document.location)).searchParams;
    let orderid = params.get("_")

          //On recupere le prix total
    const cart = JSON.parse(localStorage.getItem('cart'))
      const totalPrice = document.querySelector('#totalPrice')
      let sum = 0
   
     for (let item in cart){
             const pricePerTeddy = JSON.parse((cart[item].price)*(cart[item].quantity))
             sum += pricePerTeddy
       }
    
          // On insert l'Id et le prix total dans un message ecrit dans le DOM
    confirmMessage.innerHTML = "L'equipe d'Orinocours vous remercie pous votre commande !<br> Votre numero de confirmation est: <strong>" + orderid + "</strong> pour un cout total de <strong>" + sum + '</strong> pesos'
      }
confirmation()

    
