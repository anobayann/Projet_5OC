   
const classeA = [{
    nom: 'lucas',
    moyenne: 13
},{
    nom : 'bao',
    moyenn : 9
},{
    nom: 'loic',
    moyenne: 5
},{
    nom: 'titou',
    moyenne: 19
}]
const classeB = [{
    nom: 'yann',
    moyenne: 10
},{
    nom : 'pierre',
    moyenn : 5
},{
    nom: 'paul',
    moyenne: 14
},{
    nom: 'jak',
    moyenne: 16
}]

function quiALaMoyenne (eleves){
    for (var i = 0; i < eleves.length; i++){
        var eleve = eleves[i];
        if (eleve.moyenne >= 10) {
            console.log(eleve.nom +' a la moyenne')
        }
    }

}
  quiALaMoyenne(classeA)
  quiALaMoyenne(classeB)


  var phrase = "lorem eke fjfk ekkek lellel lememem lsloe mdmdk lelel ldldl kgkgk"
