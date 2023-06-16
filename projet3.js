const player1Score = document.getElementById('player1-score'); //Sélectionne l'élément html avec l'id "player1-score" et le stock dans la varaible 'player1score'
const player2Score = document.getElementById('player2-score'); //..
const player1Button = document.getElementById('player1-button'); //..
const player2Button = document.getElementById('player2-button'); //..
const resetButton = document.getElementById('reset-button'); //..

let score1 = 0; //Initialise les variables 'score1' et 'score 2 pour les scores des joueurs 1 et 2 respectivement.
let score2 = 0;

player1Button.addEventListener('click', () => {
  score1 += 1;
  updateScore(player1Score, score1);
}); // Incrémente le score du joueur 1 de 1 et met à jour l'affichage du score en appelant la fonction 'updateScore' avec l'élément 'player1Score et le nouveau score 'score1'

player2Button.addEventListener('click', () => { //Ajoute un écouteur d'événement au btn 'player2Button' pour écouter les clics. Qd le bouton est cliqué, le code à l'intérieur de la fontion de rappel sera exécuté. 
  score2 += 1;
  updateScore(player2Score, score2); //Incrémente le score du joueur 2 et 1 et met à jour l'affichage du score en appelant la fctn 'updateScore' avec l'élément 'player2Score' et le nouveau score 'score2' 
});

resetButton.addEventListener('click', () => { //Ajoute un écouteur d'événement au bouton 'resetButton' pour écouter clics. Qd le bouton est cliqué, le code dans la fonction de rappel sera exécuté . 
  score1 = 0;
  score2 = 0;
  updateScore(player1Score, score1);
  updateScore(player2Score, score2);
}); //Réinitialise les scores à 0 des joueurs 1 et 2, il met aussi à jour l'affichage des scores en appelant la fctn 'updateScore' pr chaque joueur avec des éléments de score correspondants et les nouveaux scores. 

function updateScore(scoreElement, score) {
  scoreElement.textContent = score;
} //Définit la fonction 'updateScore'  qui prend un élément de score et un score en tant que paramètres. Elle met à jour le contenu texte de l'élément de score avec la valeur du score fourni
