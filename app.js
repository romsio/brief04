
    let carrousel=document.getElementById("#carrousel");
    // une variable carrousel qui definit la taille de notre carrousel pour
    //incluer le nombre de card
    //
    let container=document.querySelector("#container");
    // une variable container qui définit par son id 
    //container.style.width = (`${tailleImage}`*nbrImage) + "px";
    // on applique une taille à la div de notre carrousel afin de recevoir par la suite la taille de notre card
    let nbrImage =8;
    // une variable nbrImage qui définit le nombre de card dans notre carrousel.
    //
    let position =0;
    // une variable position qui définit la position 0 de notre slide aux click gauche ou droit
    //console.log("tailleImage");
    // initialisation de ma variable  'g' qui me permet de sélectionner un bouton à gauche de notre carrousel pouvant defiler nos images à gauche. 
    let g =document.querySelector('#g');
    // initialisation de ma variable  'd' qui me permet de sélectionner un bouton à droite de notre carrousel pouvant défiler nos images à droite.
    let d =document.querySelector('#d');
d.addEventListener("click",cliqueDroit);
g.addEventListener("click",cliqueGauche);
    /*for(i=1;i<=nbrImage;i++){
        div=document.createElementBYId("div")
        div.className = "card";
        div.style.img = src("img/img"+i+".jpg")
        container.appendChild("card");
    }
    */

    function afficherMasquer() {
        if (position == -nbrImage +1) {
        d.style.visibility = "hidden";
        } 
        else{
        d.style.visibility = "visible"
            }
            if(position ==0){
                g.style.visibility = "hidden";
            }
            else{
                g.style.visibility = "visible";
            }
        }
            
    
    // Création d'une fonction permettant de masquer nos images au click droit.
     function cliqueDroit() {
        if(position > -nbrImage +1){
        position--;
        container.style.transform = "translateX("+position*190 + "px)";
        container.style.transition = "all 0.5s ease";
        afficherMasquer();
        
        };
    }
    //Création d'une fonction permettant de masquer nos images au click gauche.    
     function cliqueGauche() {
        if(position < 0){
        position++;
        container.style.transform = "translateX("+position*190 + "px)";
        container.style.transition = "all 0.5s ease";
        afficherMasquer();
        };
    }  
    
