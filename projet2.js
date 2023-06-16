const taskInput = document.getElementById('task-input'); //Sélectionne l'élément html avec l'id "task-input" et le stock dans la variable 'taskInput'.
const addButton = document.getElementById('add-button'); //Sélectionne l'élément html avec l'id "add-button" et le stock dans la variable 'addButton'.
const taskList = document.getElementById('task-list'); //Sélectionne l'élement html avec l'id "task-liste" et le stock dans la variable 'taskList'.

addButton.addEventListener('click', () => { //Ajoute un écouteur d'événements au bouton 'addButton' pour écouter les clics, lorsque le bouton est cliqué, le code à l'intérieur de la fonction de rappel sera exécuté.
  const taskText = taskInput.value.trim(); //Récupère la valeur saisie dans l'élément 'taskInput' et la stock dans la variable 'taskText' après avoir supprimé les espaces vides inutiles au début et à la fin.
  if (taskText !== '') { //Vérifié si 'taskText' n'est pas vide en comparant sa valeur avec une chaîne de caractère vide. 
    const taskItem = document.createElement('li'); //Crée nouvel élément '<li>' et le stock dans la variable 'taskItem'. 
    taskItem.textContent = taskText; //Définit contenu texte de l'élément 'taskItem' en utilisant la valeur de 'taskText' c-à-d le texte de la tâche saisie. 
    taskList.appendChild(taskItem); //Ajoute l'élément 'taskItem' à la fin de la liste des tâches, représentée par l'élément 'taskLit'. 
    taskInput.value = ''; //Réinitialise la valeur de l'élément 'taskInput' à une chaîne de la caractères vide pr effacer le texte saisi précédemment. 
  }
});
