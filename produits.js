

// //     /*const teddyb1 = document.getElementById('bouton1');
// //     teddyb1.addEventListener("click", onClick);
// //     function onClick(e){* ne fonctionne pas*/

        

// //        const tddyname = document.querySelector('#tdyname')
// //        const tddydesc = document.querySelector('#tdydesc')
// //        const tddyprice = document.querySelector('#tdyprice')
// //        const tddypic = document.querySelector('#tdypic')
// //        const tddycolor1 = document.querySelector('#color1')
// //        const tddycolor2 = document.querySelector('#color2')
// //        const tddycolor3 = document.querySelector('#color3')
// //        const tddycolor4 = document.querySelector('#color4')
// //        const coloors = document.querySelector('#coloors')
// //        const erreur = document.querySelector('.card')
// //        const buttun = document.querySelector('#btn')

// //         fetch('http://localhost:3000/api/teddies')
// //         .then(res =>  {
            
// //             if (res.ok){
// //                 res.json().then(data =>{

                   

// //                    if (document.URL.indexOf("personaliser.html?_norbert") >= 0){ // si array 0 premier 1 2eme.. -1 pas present
                   
                    
// //                     tddyname.innerHTML = '<strong>NOM</strong>: ' + data[0].name
// //                     tddydesc.innerHTML = '<strong>DESCRIPTION</strong>: ' + data[0].description
// //                     tddyprice.innerHTML = '<strong>PRIX</strong>: ' + data[0].price +" pesos"
// //                     tddypic.src = data[0].imageUrl

// //                     tddycolor1.innerHTML = data[0].colors[0]
// //                     tddycolor2.innerHTML = data[0].colors[1]
// //                     tddycolor3.innerHTML = data[0].colors[2]
// //                     tddycolor4.innerHTML = data[0].colors[3]
                                                
                    
// //                     buttun.addEventListener("click", function() {
// //                             localStorage.setItem("name1", JSON.stringify(data[0].name))
// //                             localStorage.setItem("price1", JSON.stringify(data[0].price))
// //                             localStorage.setItem("id1", JSON.stringify(data[0]._id))


// //                     })
                   
// //                    }
// //                    else if (document.URL.indexOf("personaliser.html?_arnold") >= 0){

// //                     tddyname.innerHTML = '<strong>NOM</strong>: ' + data[1].name
// //                     tddydesc.innerHTML = '<strong>DESCRIPTION</strong>: ' + data[1].description
// //                     tddyprice.innerHTML = '<strong>PRIX</strong>: ' + data[1].price +" pesos"
// //                     tddypic.src = data[1].imageUrl

// //                     tddycolor1.innerHTML = data[1].colors[0]
// //                     tddycolor2.innerHTML = data[1].colors[1]
// //                     tddycolor3.innerHTML = data[1].colors[2]
// //                     tddycolor4.remove()

// //                     buttun.addEventListener("click", function() {
// //                         localStorage.setItem("name2", JSON.stringify(data[1].name))
// //                         localStorage.setItem("price2", JSON.stringify(data[1].price))
// //                         localStorage.setItem("id2", JSON.stringify(data[1]._id))

                    
// //                    })
// //                     }
// //                    else if (document.URL.indexOf("personaliser.html?_lenny-and-carl") >= 0){
// //                     tddyname.innerHTML = '<strong>NOM</strong>: ' + data[2].name
// //                     tddydesc.innerHTML = '<strong>DESCRIPTION</strong>: ' + data[2].description
// //                     tddyprice.innerHTML = '<strong>PRIX</strong>: ' + data[2].price +" pesos"
// //                     tddypic.src = data[2].imageUrl

// //                     tddycolor1.innerHTML = data[2].colors[0]
// //                     tddycolor2.remove()
// //                     tddycolor3.remove()
// //                     tddycolor4.remove()

// //                     buttun.addEventListener("click", function() {
// //                         localStorage.setItem("name3", JSON.stringify(data[2].name))
// //                         localStorage.setItem("price3", JSON.stringify(data[2].price))
// //                         localStorage.setItem("id2", JSON.stringify(data[2]._id))

                    
// //                    })

           

                   
                        
// //                    }
// //                    else if (document.URL.indexOf("personaliser.html?_gustav") >= 0){
// //                     tddyname.innerHTML = '<strong>NOM</strong>: ' + data[3].name
// //                     tddydesc.innerHTML = '<strong>DESCRIPTION</strong>: ' + data[3].description
// //                     tddyprice.innerHTML = '<strong>PRIX</strong>: ' + data[3].price +" pesos"
// //                     tddypic.src = data[3].imageUrl

// //                     tddycolor1.innerHTML = data[3].colors[0]
// //                    tddycolor2.innerHTML = data[3].colors[1]
// //                    tddycolor3.innerHTML = data[3].colors[2]
// //                    tddycolor4.remove()

// //                    buttun.addEventListener("click", function() {
// //                     localStorage.setItem("name4", JSON.stringify(data[3].name))
// //                     localStorage.setItem("price4", JSON.stringify(data[3].price))
// //                     localStorage.setItem("id3", JSON.stringify(data[3]._id))

// //                     })
// //                    }

// //                    else if (document.URL.indexOf("personaliser.html?_garfunkel") >= 0){
// //                     tddyname.innerHTML = '<strong>NOM</strong>: ' + data[4].name
// //                     tddydesc.innerHTML = '<strong>DESCRIPTION</strong>: ' + data[4].description
// //                     tddyprice.innerHTML = '<strong>PRIX</strong>: ' + data[4].price +" pesos"
// //                     tddypic.src = data[4].imageUrl 

// //                     tddycolor1.innerHTML = data[4].colors[0]
// //                    tddycolor2.innerHTML = data[4].colors[1]
// //                    tddycolor3.innerHTML = data[4].colors[2]
// //                    tddycolor4.remove()

// //                    buttun.addEventListener("click", function() {
// //                     localStorage.setItem("name5", JSON.stringify(data[4].name))
// //                     localStorage.setItem("price5", JSON.stringify(data[4].price))
// //                     localStorage.setItem("id5", JSON.stringify(data[4]._id))

// //                })
// //                     }
                
// //                     else {
                        
                        
// //                         erreur.innerHTML = "Nos articles sont indisponibles pour le moments, notre serveur est en maintenance pour vous offrir un meilleur service :D A bientot..";
// //                     }
                    
                    
// //                    // 
// //                 })}
// //             else {
                        
                        
// //                         erreur.innerHTML = "Nos articles sont indisponibles pour le moments, notre serveur est en maintenance pour vous offrir un meilleur service :D A bientot..";
// //                 }
           
        
// //     })
// //     .catch(err => {
// //         erreur.innerHTML = "Nos articles sont indisponibles pour le moments, notre serveur est en maintenance pour vous offrir un meilleur service :D A bientot..";
// //     })
    

// // //     function addTeddies (){

// // //     }

// // //     function updateStorage(cart){
// // //      localStorage.setItem('cart', JSON.stringify(cart))
// // //  }



//     /*const teddyb1 = document.getElementById('bouton1');
//     teddyb1.addEventListener("click", onClick);
//     function onClick(e){* ne fonctionne pas*/

        

//        const tddyname = document.querySelector('#tdyname')
//        const tddydesc = document.querySelector('#tdydesc')
//        const tddyprice = document.querySelector('#tdyprice')
//        const tddypic = document.querySelector('#tdypic')
//        const tddycolor1 = document.querySelector('#color1')
//        const tddycolor2 = document.querySelector('#color2')
//        const tddycolor3 = document.querySelector('#color3')
//        const tddycolor4 = document.querySelector('#color4')
//        const coloors = document.querySelector('#coloors')
//        const erreur = document.querySelector('.card')
//        const buttun = document.querySelector('#btn')

//         fetch('http://localhost:3000/api/teddies')
//         .then(res =>  {
            
//             if (res.ok){
//                 res.json().then(data =>{

                   

//                    if (document.URL.indexOf("personaliser.html?_norbert") >= 0){ // si array 0 premier 1 2eme.. -1 pas present
                   
                    
//                     tddyname.innerHTML = '<strong>NOM</strong>: ' + data[0].name
//                     tddydesc.innerHTML = '<strong>DESCRIPTION</strong>: ' + data[0].description
//                     tddyprice.innerHTML = '<strong>PRIX</strong>: ' + data[0].price +" pesos"
//                     tddypic.src = data[0].imageUrl

//                     tddycolor1.innerHTML = data[0].colors[0]
//                     tddycolor2.innerHTML = data[0].colors[1]
//                     tddycolor3.innerHTML = data[0].colors[2]
//                     tddycolor4.innerHTML = data[0].colors[3]
                                                
                    
//                     buttun.addEventListener("click", function() {
//                             localStorage.setItem("name1", JSON.stringify(data[0].name))
//                             localStorage.setItem("price1", JSON.stringify(data[0].price))
//                             localStorage.setItem("id1", JSON.stringify(data[0]._id))


//                     })
                   
//                    }
//                    else if (document.URL.indexOf("personaliser.html?_arnold") >= 0){

//                     tddyname.innerHTML = '<strong>NOM</strong>: ' + data[1].name
//                     tddydesc.innerHTML = '<strong>DESCRIPTION</strong>: ' + data[1].description
//                     tddyprice.innerHTML = '<strong>PRIX</strong>: ' + data[1].price +" pesos"
//                     tddypic.src = data[1].imageUrl

//                     tddycolor1.innerHTML = data[1].colors[0]
//                     tddycolor2.innerHTML = data[1].colors[1]
//                     tddycolor3.innerHTML = data[1].colors[2]
//                     tddycolor4.remove()

//                     buttun.addEventListener("click", function() {
//                         localStorage.setItem("name2", JSON.stringify(data[1].name))
//                         localStorage.setItem("price2", JSON.stringify(data[1].price))
//                         localStorage.setItem("id2", JSON.stringify(data[1]._id))

                    
//                    })
//                     }
//                    else if (document.URL.indexOf("personaliser.html?_lenny-and-carl") >= 0){
//                     tddyname.innerHTML = '<strong>NOM</strong>: ' + data[2].name
//                     tddydesc.innerHTML = '<strong>DESCRIPTION</strong>: ' + data[2].description
//                     tddyprice.innerHTML = '<strong>PRIX</strong>: ' + data[2].price +" pesos"
//                     tddypic.src = data[2].imageUrl

//                     tddycolor1.innerHTML = data[2].colors[0]
//                     tddycolor2.remove()
//                     tddycolor3.remove()
//                     tddycolor4.remove()

//                     buttun.addEventListener("click", function() {
//                         localStorage.setItem("name3", JSON.stringify(data[2].name))
//                         localStorage.setItem("price3", JSON.stringify(data[2].price))
//                         localStorage.setItem("id2", JSON.stringify(data[2]._id))

                    
//                    })

           

                   
                        
//                    }
//                    else if (document.URL.indexOf("personaliser.html?_gustav") >= 0){
//                     tddyname.innerHTML = '<strong>NOM</strong>: ' + data[3].name
//                     tddydesc.innerHTML = '<strong>DESCRIPTION</strong>: ' + data[3].description
//                     tddyprice.innerHTML = '<strong>PRIX</strong>: ' + data[3].price +" pesos"
//                     tddypic.src = data[3].imageUrl

//                     tddycolor1.innerHTML = data[3].colors[0]
//                    tddycolor2.innerHTML = data[3].colors[1]
//                    tddycolor3.innerHTML = data[3].colors[2]
//                    tddycolor4.remove()

//                    buttun.addEventListener("click", function() {
//                     localStorage.setItem("name4", JSON.stringify(data[3].name))
//                     localStorage.setItem("price4", JSON.stringify(data[3].price))
//                     localStorage.setItem("id3", JSON.stringify(data[3]._id))

//                     })
//                    }

//                    else if (document.URL.indexOf("personaliser.html?_garfunkel") >= 0){
//                     tddyname.innerHTML = '<strong>NOM</strong>: ' + data[4].name
//                     tddydesc.innerHTML = '<strong>DESCRIPTION</strong>: ' + data[4].description
//                     tddyprice.innerHTML = '<strong>PRIX</strong>: ' + data[4].price +" pesos"
//                     tddypic.src = data[4].imageUrl 

//                     tddycolor1.innerHTML = data[4].colors[0]
//                    tddycolor2.innerHTML = data[4].colors[1]
//                    tddycolor3.innerHTML = data[4].colors[2]
//                    tddycolor4.remove()

//                    buttun.addEventListener("click", function() {
//                     localStorage.setItem("name5", JSON.stringify(data[4].name))
//                     localStorage.setItem("price5", JSON.stringify(data[4].price))
//                     localStorage.setItem("id5", JSON.stringify(data[4]._id))

//                })
//                     }
                
//                     else {
                        
                        
//                         erreur.innerHTML = "Nos articles sont indisponibles pour le moments, notre serveur est en maintenance pour vous offrir un meilleur service :D A bientot..";
//                     }
                    
                    
//                    // 
//                 })}
//             else {
                        
                        
//                         erreur.innerHTML = "Nos articles sont indisponibles pour le moments, notre serveur est en maintenance pour vous offrir un meilleur service :D A bientot..";
//                 }
           
        
//     })
//     .catch(err => {
//         erreur.innerHTML = "Nos articles sont indisponibles pour le moments, notre serveur est en maintenance pour vous offrir un meilleur service :D A bientot..";
//     })
    

// //     function addTeddies (){

// //     }

// //     function updateStorage(cart){
// //      localStorage.setItem('cart', JSON.stringify(cart))
// //  }

const tddyname = document.querySelector('#tdyname')
const tddydesc = document.querySelector('#tdydesc')
const tddyprice = document.querySelector('#tdyprice')
const tddypic = document.querySelector('#tdypic')
const tddycolor1 = document.querySelector('#color1')
const tddycolor2 = document.querySelector('#color2')
const tddycolor3 = document.querySelector('#color3')
const tddycolor4 = document.querySelector('#color4')
const coloors = document.querySelector('#coloors')
const erreur = document.querySelector('.card')
const buttun = document.querySelector('#btn')


function personnaliser(nounours) {
     tddyname.innerHTML = '<strong>NOM</strong>: ' + nounours.name
    tddydesc.innerHTML = '<strong>DESCRIPTION</strong>: ' + nounours.description
    tddyprice.innerHTML = '<strong>PRIX</strong>: ' + nounours.price +" pesos"
    tddypic.src = nounours.imageUrl
    tddycolor1.innerHTML = nounours.colors[0]
        tddycolor2.remove()
        tddycolor3.remove()
        tddycolor4.remove()
     buttun.addEventListener("click", function() {
       const posts = JSON.parse(localStorage['cart'] || "[]");
       posts.push({
       name: JSON.stringify(nounours.name),
       price: JSON.stringify(nounours.price)
       });
       //localStorage['cart'] = JSON.stringify(posts);
       localStorage.setItem('cart', JSON.stringify(posts))
 })
}
 fetch('http://localhost:3000/api/teddies')
.then(res =>  {
     if (res.ok){
         res.json().then(data =>{
            if (document.URL.indexOf("personaliser.html?_norbert") >= 0){ // si array 0 premier 1 2eme.. -1 pas present
              let nounours = data[0];
              personnaliser(nounours);
             }
            else if (document.URL.indexOf("personaliser.html?_arnold") >= 0){
              let nounours = data[1];
              personnaliser(nounours);
             }
            else if (document.URL.indexOf("personaliser.html?_lenny-and-carl") >= 0){
              let nounours = data[2];
              personnaliser(nounours);
            }
            else if (document.URL.indexOf("personaliser.html?_gustav") >= 0){
              let nounours = data[3];
              personnaliser(nounours);
            }
            else if (document.URL.indexOf("personaliser.html?_garfunkel") >= 0){
              let nounours = data[4];
              personnaliser(nounours);
             }
             else {
                 erreur.innerHTML = "Nos articles sont indisponibles pour le moments, notre serveur est en maintenance pour vous offrir un meilleur service :D A bientot..";
             }
         })}
     else {
                 erreur.innerHTML = "Nos articles sont indisponibles pour le moments, notre serveur est en maintenance pour vous offrir un meilleur service :D A bientot..";
         }
})