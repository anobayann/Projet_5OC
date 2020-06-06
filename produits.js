

    /*const teddyb1 = document.getElementById('bouton1');
    teddyb1.addEventListener("click", onClick);
    function onClick(e){* ne fonctionne pas*/

        

       const tddyname = document.getElementById('tdyname')
       const tddydesc = document.querySelector('#tdydesc')
       const tddyprice = document.querySelector('#tdyprice')
       const tddypic = document.querySelector('#tdypic')
       const tddycolor1 = document.querySelector('#color1')
       const tddycolor2 = document.querySelector('#color2')
       const tddycolor3 = document.querySelector('#color3')
       const tddycolor4 = document.querySelector('#color4')
       const coloors = document.querySelector('#coloors')
       const erreur = document.querySelector('.card')

       
       

       

        fetch('http://localhost:3000/api/teddies')
        .then(res =>  {
            
            if (res.ok){
                res.json().then(data =>{

                   

                   if (document.URL.indexOf("personaliser.html?_norbert") >= 0){ // si array 0 premier 1 2eme.. -1 pas present
                   
                    tddyname.innerHTML = '<strong>NOM</strong>: ' + data[0].name
                    tddydesc.innerHTML = '<strong>DESCRIPTION</strong>: ' + data[0].description
                    tddyprice.innerHTML = '<strong>PRIX</strong>: ' + data[0].price +" pesos"
                    tddypic.src = data[0].imageUrl

                   tddycolor1.innerHTML = data[0].colors[0]
                   tddycolor2.innerHTML = data[0].colors[1]
                   tddycolor3.innerHTML = data[0].colors[2]
                   tddycolor4.innerHTML = data[0].colors[3]
                   
                   





                   }
                   else if (document.URL.indexOf("personaliser.html?_arnold") >= 0){
                    tddyname.innerHTML = '<strong>NOM</strong>: ' + data[1].name
                    tddydesc.innerHTML = '<strong>DESCRIPTION</strong>: ' + data[1].description
                    tddyprice.innerHTML = '<strong>PRIX</strong>: ' + data[1].price +" pesos"
                    tddypic.src = data[1].imageUrl

                    tddycolor1.innerHTML = data[1].colors[0]
                    tddycolor2.innerHTML = data[1].colors[1]
                    tddycolor3.innerHTML = data[1].colors[2]
                    tddycolor4.remove()

                    

                   }
                   else if (document.URL.indexOf("personaliser.html?_lenny-and-carl") >= 0){
                    tddyname.innerHTML = '<strong>NOM</strong>: ' + data[2].name
                    tddydesc.innerHTML = '<strong>DESCRIPTION</strong>: ' + data[2].description
                    tddyprice.innerHTML = '<strong>PRIX</strong>: ' + data[2].price +" pesos"
                    tddypic.src = data[2].imageUrl

                    tddycolor1.innerHTML = data[2].colors[0]
                   tddycolor2.remove()
                   tddycolor3.remove()
                   tddycolor4.remove()

                   

           

                   
                        
                   }
                   else if (document.URL.indexOf("personaliser.html?_gustav") >= 0){
                    tddyname.innerHTML = '<strong>NOM</strong>: ' + data[3].name
                    tddydesc.innerHTML = '<strong>DESCRIPTION</strong>: ' + data[3].description
                    tddyprice.innerHTML = '<strong>PRIX</strong>: ' + data[3].price +" pesos"
                    tddypic.src = data[3].imageUrl

                    tddycolor1.innerHTML = data[3].colors[0]
                   tddycolor2.innerHTML = data[3].colors[1]
                   tddycolor3.innerHTML = data[3].colors[2]
                   tddycolor4.remove()
                   }

                   else if (document.URL.indexOf("personaliser.html?_garfunkel") >= 0){
                    tddyname.innerHTML = '<strong>NOM</strong>: ' + data[4].name
                    tddydesc.innerHTML = '<strong>DESCRIPTION</strong>: ' + data[4].description
                    tddyprice.innerHTML = '<strong>PRIX</strong>: ' + data[4].price +" pesos"
                    tddypic.src = data[4].imageUrl 

                    tddycolor1.innerHTML = data[4].colors[0]
                   tddycolor2.innerHTML = data[4].colors[1]
                   tddycolor3.innerHTML = data[4].colors[2]
                   tddycolor4.remove()
                    }
                
                    else {
                        
                        
                        erreur.innerHTML = "Nos articles sont indisponibles pour le moments, notre serveur est en maintenance pour vous offrir un meilleur service :D A bientot..";
                    }
                    
                    
                   // 
                })}
            else {
                        
                        
                        erreur.innerHTML = "Nos articles sont indisponibles pour le moments, notre serveur est en maintenance pour vous offrir un meilleur service :D A bientot..";
                }
           
        
    })
    

