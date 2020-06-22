
    const confirmMessage = document.querySelector('#confirmMessage')
    let params = (new URL(document.location)).searchParams;
    let orderid = params.get("_")
    
    confirmMessage.innerHTML = 'Féliciations, vous avez validé votre commande ! <strong>OrderId</strong>: ' + orderid + ' <strong>Prix</strong>: C\'est gratuit' 


    
