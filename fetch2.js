// https://www.youtube.com/watch?v=sGvEqHkDyFc
// https://leblogducodeur.fr/fetch-javascript/

//les const pour ensuite remplacer textes ou images

const img1 = document.getElementById('ours1')
const img2 = document.getElementById('ours2')
const img3 = document.getElementById('ours3')
const img4 = document.getElementById('ours4')
const img5 = document.getElementById('ours5')
const name1 = document.getElementById('oursname1')
const name2 = document.getElementById('oursname2')
const name3 = document.getElementById('oursname3')
const name4 = document.getElementById('oursname4')
const name5 = document.getElementById('oursname5')
const price1 = document.getElementById('oursprice1')
const price2 = document.getElementById('oursprice2')
const price3 = document.getElementById('oursprice3')
const price4 = document.getElementById('oursprice4')
const price5 = document.getElementById('oursprice5')






fetch('http://localhost:3000/api/teddies') // methode fetch car plus nouvelle et inclus les promesses
    .then(res =>  { //la méthode then() retourne automatiquement une nouvelle promesse et res = response
        
        if (res.ok){  // si le reponse est ok donc 
            res.json().then(data =>{ //on traduit la reponse avec json puis nouvelle promesse pour recuper elemts de reponse 
                img1.src = data[0].imageUrl // ou ecrire reponse.(src pr img et innerhtml pr texr = oursnumber.quelpropriete)
                img2.src = data[1].imageUrl
                img3.src = data[2].imageUrl
                img4.src = data[3].imageUrl
                img5.src = data[4].imageUrl
                name1.innerHTML = data[0].name
                name2.innerHTML = data[1].name
                name3.innerHTML = data[2].name
                name4.innerHTML = data[3].name
                name5.innerHTML = data[4].name
                price1.innerHTML = data[0].price +" pesos"
                price2.innerHTML = data[1].price +" pesos"
                price3.innerHTML = data[2].price +" pesos"
                price4.innerHTML = data[3].price +" pesos"
                price5.innerHTML = data[4].price +" pesos"
                
            })}
        else { // sinon on efface les cards.. et on ecrit un message d'erreur a la place
           
            
           const parent = document.getElementById('menu')
           const parent2 = document.getElementById('menu2')
           const parent3 = document.getElementById('menu3')
           parent.innerHTML ="Nos articles sont indisponibles pour le moments, notre serveur est en maintenance pour vous offrir un meilleur service :D A bientot..";
           parent2.innerHTML ="";
           parent3.innerHTML ="";
        }
    })
    .catch(err => {
            const parent = document.getElementById('menu')
           const parent2 = document.getElementById('menu2')
           const parent3 = document.getElementById('menu3')
           parent.innerHTML ="Nos articles sont indisponibles pour le moments, notre serveur est en maintenance pour vous offrir un meilleur service :D A bientot..";
           parent2.innerHTML ="";
           parent3.innerHTML ="";
        }
    )
 