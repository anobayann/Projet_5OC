
//Planifiez une suite de tests unitaires pour couvrir au minimum 80 % de la base.. 

//Concernant l’API, des promesses devront être utilisées pour éviter les rappels. 

//Les inputs des utilisateurs doivent être validés avant l’envoi à l’API. 

// Le code source devra être mis en retrait et utiliser des commentaires. Il devra également utiliser des fonctions globales. 

// Pour le MVP, la personnalisation du produit ne sera pas fonctionnelle : la page contenant un seul article aura un menu déroulant permettant à l'utilisateur dechoisir une option de personnalisation, mais celle-ci ne sera ni envoyée au serveur ni reflétée dans la réponse du serveur. 
/*
JSON format :
Champ Type
id ObjectID
name string
price number
description string
imageUrl string

Chaque API contient 3 paramètres :
GET / - Retourne un tableau de tous les éléments
GET /:_id - Renvoie l'élément correspondant à identifiant given_id
POST /order Requête JSON contenant un objet de contact et un Retourne l'objet contact, le tableau produits et order_id (string) tableau de produits Pour les routes POST, l'objet “contact” envoyé au serveu

*/




let httpRequest = new XMLHttpRequest(); // On cree un objet XMLHttpRequest ()



httpRequest.onreadystatechange = function (){ // instructions de traitement de la réponse

    if (this.readyState === 4 && this.status === 200){  // this is la variable httpRequest
                                                            // 4 ==> DONE (terminée) ou (requête terminée et réponse prête)
                                                                    // 200 indique que tout s'est bien passé
       //demo.innerHTML = JSON.stringify(this.response);
        var data = this.response;
        const machin = document.querySelectorAll('h5')
        
        for (let i = 0; i <= data.length; i++){
            machin.textContent = data.name[i];
        }
           
    
       
        //console.log(data);
        //for (let i = 0; i < data.length; i++){
            
//}
      // document.getElementById('demo').innerHTML = response;
      
       /*const toto = httpRequest.response;
       for (let i = 0, c = toto.length; i < c; i++) {

        document.getElementById('demo').innerHTML = response[i]; //importe la reponse dans mon id html demo}*/
       
    }

    else {

    // il y a eu un problème avec la requête,
    // par exemple la réponse peut être un code 404 (Non trouvée) 
    // ou 500 (Erreur interne au serveur)
    }

      
    }
httpRequest.open("GET", "http://localhost:3000/api/teddies"); // On initialise notre requete avec Open, (get pour recuper, url de l'api, true par default qui definie asynchrone)
httpRequest.responseType = "json"; // On demande reponse au format json 

httpRequest.send (); //On envoi la requete car methode GET, (null par default)

 
