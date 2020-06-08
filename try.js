class Teddies {
    constructor(name, description, price, id, image){
        this.name = name;
        this.description = description;
        this.price = price;
        this.id = id;
        this.image = image;

        
       
    }

}
let teddy1 = new Teddies (data[0].name, data[0].description, price[0].data )


fetch('http://localhost:3000/api/teddies')
.then(res =>  {
    
    if (res.ok){
        res.json().then(data =>{






            let teddy1 = {
                name : data[0].name,
                price : data[0].price,
                id : data[0].id
            }
            let teddy2 = {
                name : data[1].name,
                price : data[1].price,
                id : data[1].id
            }
            let teddy3 = {
                name : data[2].name,
                price : data[2].price,
                id : data[2].id
            }
            })}
    else { 
    }})


    //panier
    let cart = {};
    // a stcker ds le local storage
    updateStorage(cart);

    //ajouter teddy1 au panier


function addToCart(teddy, cart){
    cart[teddy.id] = teddy;
    updateStorage(cart);
    return(cart);

function updateStorage(cart){
    localStorage.setItem('cart', JSON.stringify(cart))
}

}




