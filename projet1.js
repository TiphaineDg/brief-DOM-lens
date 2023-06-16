const carousel = document.querySelector('.carousel'); //Sélectionne l'élément HTml avec la classe "carousel" puis le stock dans la variable "carousel".
const images = carousel.querySelectorAll('img'); //Sélectionne tous les élements '<img>' dans 'carousel' et les stock dans la variable 'images'.
const nextButton = carousel.querySelector('.next-button'); //Sélectionne le 1er élément avec "next-button" dans 'carousel' puis le stock dans la variable 'nextButton'
let currentIndex = 0; //Initialise la variable 'currentIndex' à 0

nextButton.addEventListener('click', () => { //Quand le bouton est cliqué, le code à l'intérieur de la fonction de rappel sera exécuté
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  } //Incrémente la variable 'currentIndex' et la réinitialise à 0 si elle atteint ou dépasse la longueur du tableau 'images'.
  images.forEach((image, index) => {
    if (index === currentIndex) {
      image.style.display = 'block';
    } else {
      image.style.display = 'none';
    }
  }); //Parcourt chaque image dans le tableau 'image'. Si l'index de l'image correspond à 'currentIndex', elle l'affiche en utilisant 'display:block', sinon elle masque en utilisant 'display:none'.
});