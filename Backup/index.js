function composerBandeauPeriode (aCle) {
    
    document.getElementById('info').innerHTML = '';
    
    if (aCle.value != 'vide') {
        for (var i=0; i < listePeriodes.length; i++) 	   
          if (listePeriodes[i].cleRess == aCle.value) {
//           console.log('https://webapps.scheppers-wetteren.be/lessenrooster/klassen/' + listePeriodes[i].codage + '.png');
          document.getElementById('foto').src = 'https://webapps.scheppers-wetteren.be/lessenrooster/klassen/' + listePeriodes[i].codage + '.png';
        }
        let x = null;
        let Sublink_img = null;
        let titel = null;
        let lignes = null;

        for (let index = 0; index < listeGrilles.length; index++) {
          x = listeGrilles[index];
          if(x.cleGrille.substring(2,10) === aCle.value){
            Sublink_img = 'https://webapps.scheppers-wetteren.be/lessenrooster/' + x.nomFichier + '.png'
            extras = x.renvois
          }
          }
          extras.forEach(element => {
            lignes = element.lignes
          });
  
          extras.forEach(element => {
            titel = element.titre
          });
  
  
          if(titel != null){
            for (let index = 0; index < lignes.length; index++) {
              let newDiv = document.createElement("tr");
              let newDiv_ = document.createElement("td");
  
              let arr = [lignes[index].numero, lignes[index].texte]
  
              for (let i = 0; i < arr.length; i++) {
                newDiv_.innerHTML = arr[i];
                newDiv.appendChild(newDiv_);
  
                document.getElementById('info').appendChild(newDiv)
              }
            }
          }
    }
  }
