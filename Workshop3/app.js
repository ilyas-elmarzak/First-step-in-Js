function nextInLine(){
    var tab = [1,2,3,4,5,6];
    console.log("Affichage du tableau avant le push :");
    console.log("[" +tab +"]");
    tab.push(8);
    console.log("Affichage du tableau Aprés le push :");
    console.log("[" +tab +"]");
    var removeFirstname = tab.shift(); // remove le premier element du tableau 
    // tab.splice(0)
    console.log("Affichage du tableau après la suppression du  premier element : ");
    console.log("[" +tab +"]");
    console.log("Affichage du supprétion de la premier element : ");
    console.log(removeFirstname);
}nextInLine();