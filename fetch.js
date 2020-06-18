
//les const pour ensuite remplacer textes ou images

const img = document.querySelectorAll('.card-img-top') 
const name = document.querySelectorAll('.card-title')
const price = document.querySelectorAll('.card-text')





   // on  recupere les 3 rows pour effacer les 2 derniers et remplacer le premier par une phrase

function errorMessage () {

            const row1 = document.querySelector('#menu')
            const row2 = document.querySelector('#menu2')
            const row3 = document.querySelector('#menu3')
            row1.innerHTML ="Nos articles sont indisponibles pour le moments, notre serveur est en maintenance pour vous offrir un meilleur service :D A bientot..";
            row2.innerHTML ="";
            row3.innerHTML ="";
            };



function fetchTeddies(){
    fetch('http://localhost:3000/api/teddies') //on fetch(requete a l'API qui envoit une requet GET par default
        .then(res =>  {    //la methode then envoit une promesse de reponse(voir catch si pas de reponse)
        
            if (res.ok){    //Si la reponse est un succes, c est a dire status entre 200 et 299
                res.json().then(teddies =>{ //2eme promesse pour nous donner les data(appeles teddies) en format json
                
                    for (let teddy in teddies){  // boucle pour chaque teddy de l'ensemble des teddies
                
                    img[teddy].src = teddies[teddy].imageUrl  //1er teddy ds la premiere carte, 2eme ds la deuxieme...
                
                    name[teddy].innerHTML = teddies[teddy].name
                
                    price[teddy].innerHTML = teddies[teddy].price +" pesos"

                    }
                
                })}
            else {       //Sinon (cas ou la reponse n est pas un succes) 
           
                errorMessage() //la fonction remplace les fiches par message d'erreur au choix(voir au dessus)
           
            }
        })
        .catch(err => { // la methode catch au cas ou la promesse de reponse est rejete pour pouvoir traiter la reponse

            errorMessage()
        })
    }
fetchTeddies();  //On appel la fonction
