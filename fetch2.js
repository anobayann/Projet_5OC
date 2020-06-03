// https://www.youtube.com/watch?v=sGvEqHkDyFc

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





fetch('http://localhost:3000/api/teddies')
    .then(res =>  {
        
        if (res.ok){
            res.json().then(data =>{
                img1.src = data[0].imageUrl
                img2.src = data[1].imageUrl
                img3.src = data[2].imageUrl
                img4.src = data[3].imageUrl
                img5.src = data[4].imageUrl
                name1.innerHTML = data[0].name
                name2.innerHTML = data[1].name
                name3.innerHTML = data[2].name
                name4.innerHTML = data[3].name
                name5.innerHTML = data[4].name
                price1.innerHTML = data[0].price +" php"
                price2.innerHTML = data[1].price +" php"
                price3.innerHTML = data[2].price +" php"
                price4.innerHTML = data[3].price +" php"
                price5.innerHTML = data[4].price +" php"
                
            })}
        else {
           
           const parent = document.getElementById('menu')
           const parent2 = document.getElementById('menu2')
           const parent3 = document.getElementById('menu3')
           parent.innerHTML ="Nos articles sont indisponibles pour le moments, notre serveur est en maintenance pour vous offrir un meilleur service :D A bientot..";
           parent2.innerHTML ="";
           parent3.innerHTML ="";
        }
    })


