document.addEventListener("DOMContentLoaded", function () {
    const playerHealthElement = document.getElementById("player-health");
    const monsterHealthElement = document.getElementById("monster-health");
    const attackBtn = document.getElementById("attack-btn");
    const specialAttackBtn = document.getElementById("special-attack-btn");
    const healBtn = document.getElementById("heal-btn");
    const giveUpBtn = document.getElementById("give-up-btn");
    const combatLogElement = document.getElementById("combat-log");


    // Variables points de vie du khabib/conor
    let playerHealth = 100;
    let monsterHealth = 100;

    // MÀJ barres de vie
    function updateHealthBars() {
        playerHealthElement.style.width = playerHealth + "%";
        monsterHealthElement.style.width = monsterHealth + "%";
    }

    // Ajout message dans journal de combat
    function logMessage(message, className) {
        const logElement = document.createElement("p");
        logElement.textContent = message;
        logElement.className = className;
        combatLogElement.appendChild(logElement);
    }

    // activer/reactiver bouttons d'actions
    function disableButtons() {
        attackBtn.disabled = true;
        specialAttackBtn.disabled = true;
        healBtn.disabled = true;
        giveUpBtn.disabled = true;
    }

    // désactive bouttons d'action, on ne peut plus cliquer sur les boutons pr effectuer des actions 
    function enableButtons() {
        attackBtn.disabled = false;
        specialAttackBtn.disabled = false;
        healBtn.disabled = false;
        giveUpBtn.disabled = false;
    }

    // Fctn pour l'attaque de khabib
    function attack() {
        const playerDamage = Math.floor(Math.random() * 10) + 1;
        const monsterDamage = Math.floor(Math.random() * 10) + 1;

        monsterHealth -= playerDamage;
        playerHealth -= monsterDamage;

        logMessage("Khabib inflige " + playerDamage + " points de dégâts.", "player-log");
        logMessage("Conor inflige " + monsterDamage + " points de dégâts.", "monster-log");

        updateHealthBars();
        logMessage("Khabib inflige " + playerDamage + " points de dégâts.", "player-log");
        logMessage("Conor inflige " + monsterDamage + " points de dégâts.", "monster-log");
        checkEndGame();
    }

    // Fctn pour l'attaque spéciale khabib
    function specialAttack() {
        const playerDamage = Math.floor(Math.random() * 20) + 1;
        const monsterDamage = Math.floor(Math.random() * 10) + 1;

        monsterHealth -= playerDamage;
        playerHealth -= monsterDamage;

        updateHealthBars();
        logMessage("Khabib utilise une attaque spéciale" + playerDamage + " points de dégâts.", "player-log");
        logMessage("Conor inflige" + monsterDamage + " points de dégâts", "monster-log");
        checkEndGame();
    }

    // Fonction pour la récupération de vie de khabib
    function heal() {
        const healAmount = Math.floor(Math.random() * 10) + 1;

        if (playerHealth + healAmount > 100) {
            playerHealth = 100;
        } else {
            playerHealth += healAmount;
        }

        const monsterDamage = Math.floor(Math.random() * 10) + 1;
        playerHealth -= monsterDamage;

        updateHealthBars();
        logMessage("Khabib récupère" + healAmount + " points de vie", "player-log");
        logMessage("Conor inflige" + monsterDamage + " points de dégâts", "monster-log");
        checkEndGame();
    }

    // Fonction pour abandon khabib
    function giveUp() {
        logMessage("Khabib déclare forfait, Conor gagne.. ", "monster-log");
        disableButtons();
        checkEndGame(); 
      }

    // Vérification de la fin de partie

    function checkEndGame() {
        if (playerHealthElement = 0) {
            logMessage("Conor a gagné...", "monster-log");
            disableButtons();
        } else if (monsterHealthElement = 0) {
            logMessage("Khabib a gagné !!!", "player-log");
            disableButtons();
        }
    }

    attackBtn.addEventListener("click", attack);
    specialAttackBtn.addEventListener("click", specialAttack);
    healBtn.addEventListener("click", heal);
    giveUpBtn.addEventListener("click", giveUp);

    updateHealthBars();
});
