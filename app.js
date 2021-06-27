let scorjucator=0;
let scorcomputer=0;
const scor_jucator_ecran=document.getElementById("scor-jucator");
const scor_computer_ecran=document.getElementById("scor-computer");
const scoreboard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector (".mesaj");
const piatra_div = document.getElementById ("p");
const hartie_div = document.getElementById ("h");
const foarfeca_div = document.getElementById ("f");
function variantacomputer()
{
    const variante = ['p', 'f', 'h'];
    const nrRandom = Math.floor(Math.random() * 3);
    return variante [nrRandom];
}
function cuvant(litera)
{
if(litera === 'p') return "Piatra";
else if (litera === 'f') return "Foarfeca";
else return "Hârtia";
}
function win(userchoice,computerchoice){
    scorjucator++;
    scor_jucator_ecran.innerHTML = scorjucator;
    result_div.innerHTML = cuvant(userchoice) + " bate " + cuvant(computerchoice) + ". Ai câștigat! :)"; 
}
function lose(userchoice,computerchoice){
    scorcomputer++;
    scor_computer_ecran.innerHTML = scorcomputer;
    result_div.innerHTML = cuvant(computerchoice)+ " bate " + cuvant(userchoice)  + ". Ai pierdut! :("; 
}
function draw(userchoice,computerchoice){
    result_div.innerHTML = " Este egalitate"; 
}
function game(varianta_utilizator)
{
    const Vcomputer= variantacomputer();
    switch (varianta_utilizator + Vcomputer){
        case "pf":
        case "fh":
         case "hp":
            win(varianta_utilizator, Vcomputer);
            break;
        case "ph":
        case "fp":
        case "hf":
            lose(varianta_utilizator,Vcomputer);
            break;
        case "pp":
        case "ff":
        case "hh":
            draw(varianta_utilizator,Vcomputer);
            break;

    }
}
function main()
{
    piatra_div.addEventListener("click", function (){
       game("p");
        } )

    hartie_div.addEventListener("click", function (){
        game("h");
        } )

    foarfeca_div.addEventListener("click", function (){
        game("f");
                } )
}
main();