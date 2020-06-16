
//les const pour ensuite remplacer textes ou images

const img = document.querySelectorAll('.card-img-top') 
const name = document.querySelectorAll('.card-title')
const price = document.querySelectorAll('.card-text')




   // on  recupere les 3 rows pour effacer les 2 derniers et remplacer le premier par un par une phrase

function errorMessage () {

            const row1 = document.querySelector('#menu')
            const row2 = document.querySelector('#menu2')
            const row3 = document.querySelector('#menu3')
            row1.innerHTML ="Nos articles sont indisponibles pour le moments, notre serveur est en maintenance pour vous offrir un meilleur service :D A bientot..";
            row2.innerHTML ="";
            row3.innerHTML ="";
            };




fetch('http://localhost:3000/api/teddies') 
    .then(res =>  {   
        
        if (res.ok){    
            res.json().then(teddies =>{ 
                
                for (let teddy in teddies){  // pour chaque teddy de l'ensemble des teddies
                
                img[teddy].src = teddies[teddy].imageUrl  //1er teddy ds la premiere carte, 2eme ds la deuxieme...
                
                name[teddy].innerHTML = teddies[teddy].name
                
                price[teddy].innerHTML = teddies[teddy].price +" pesos"
                }
                
            })}
        else { 
           
            errorMessage() 
           
        }
    })
     .catch(err => {

        errorMessage()
     })


