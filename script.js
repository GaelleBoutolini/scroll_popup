let playOnce =true;




// 1-Créer un événement au scroll
window.addEventListener("scroll", () =>{
//effet sur la navbar
if(window.scrollY >50){
    navbar.style.height = "45px"
}else{
    navbar.style.height = "90px";
}

// 2-Réduire la navbar quand on descend vers le bas, la remettre à sa taille initiale quand on remonte tout en haut

//Ici, on fait un pourcentage de scroll: quand tu as tel pourcentage de scroll, tu fais telle tache, et ainsi de suite. Pour cela, on fait la valeur intinial/la valeur globale et on obtient le pourcentage.

//la taille totale du body: document.body.offsetheight.

//window.innerHeight est une propriété JavaScript qui retourne la hauteur intérieure de la fenêtre du navigateur, c'est-à-dire la hauteur de la zone de visualisation de la page Web. Cette valeur inclut la barre de défilement, le contenu de la page, mais exclut la barre d'outils et la barre de menu du navigateur.

//Cette propriété est utile lorsque vous voulez déterminer la taille de la fenêtre du navigateur dans votre application Web, par exemple pour déterminer si une zone particulière est visible ou pour ajuster la mise en page de votre page en fonction de la taille de la fenêtre.



//document.body.offsetHeight est une propriété JavaScript qui retourne la hauteur totale de l'élément <body> de votre page Web. Cette valeur inclut la hauteur du contenu de la page ainsi que les marges, les bordures et les paddings.

//Cette propriété est utile lorsque vous voulez déterminer la taille totale de votre page Web, y compris les marges et les bordures, ce qui peut être utile pour déterminer si une zone particulière est visible ou pour ajuster la mise en page de votre page en fonction de la taille de la page.



// 3-Faire apparaitre mon image de la partie Envol

let scrollValue =
(window.scrollY + window.innerHeight)/document.body.offsetHeight;

if(scrollValue >0.45){
    imgEnvol.style.opacity = 1;
    imgEnvol.style.transform = "none";
}


// 4- Faire apparaitre la popup quand on est en bas du site
if(scrollValue >0.85 && playOnce){
    popup.style.opacity = 1;
    popup.style.transform = "none";
    playOnce = false;
}

});

// 5-Denière partie : quand on clique sur la popup, elle disparait pour toujours
closeBtn.addEventListener("click", ()=>{
    popup.style.opacity = 0;
    popup.style.transform = "translateX(500px)";

});
