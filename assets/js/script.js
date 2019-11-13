/*VERSION CORRIGÉ (simplifiée)*/
$(function() {
  var computerScore = 0;
  var humanScore = 0;
  var nbScore = 0;
  let robot = $('.left');
  let human = $('.right');
  var result = $('.result');
  $('button').click(function() {
    let pHuman = $('.purcent-human');
    let pRobot = $('.purcent-robot');
    let purcentHuman = ((humanScore / nbScore) * 100).toFixed(2);
    let purcentRobot = ((computerScore / nbScore) * 100).toFixed(2);
    let playerChoice = $('select option:selected').val();
    let computerChoice = Math.floor(Math.random() * 3)
    nbScore++
    if (computerChoice == playerChoice) {
      result.html('Egalité');
    }else if ((playerChoice == 2 && computerChoice == 0) || (playerChoice == 3 && computerChoice == 1) || (playerChoice == 0 && computerChoice == 1)) {
      result.html('Perdu')
      robot.html(computerScore);
      pRobot.html(purcentRobot);
      computerScore++
    }else {
      result.html('victoire');
      human.html(humanScore);
      pHuman.html(purcentRobot);
      humanScore++
    }
  })
})





// $(function() {
//   var player = '';
//   var computer = '';
//   var result = $('.result');
//   var choice = $('.choice');
//   var computerScore = 0;
//   var humanScore = 0;
//   var nbScore = 0;
//
//
//                 /*VERSION AVEC DES BOUTONS*/
//   // /* choisir pierre */
//   // $('.stone').click(function() {
//     //   choice.addClass('text-dark').html('  Pierre');
//     //   player = 'stone';
//     // });
//     // /* choisir feuille */
//     // $('.paper').click(function() {
//       //   choice.addClass('text-dark').html('  Feuille');
//       //   player = 'paper';
//       // });
//       // /* choisir ciseaux */
//       // $('.scissors').click(function() {
//         //   choice.addClass('text-dark').html('  Ciseaux');
//         //   player = 'scissors';
//         // });
//         // /*ne sert a rien, si ce n'est gagner a 100%*/
//         // $('.puit').click(function() {
//           //   choice.addClass('text-dark').html('  puit');
//           //   player = 'puit';
//           // });
//
//   // Choix de l'IA
//   function computerChoice() {
//     var computerChoice = Math.floor(Math.random()*3 + 1)
//     // si l'IA choisi 'pierre'
//     if (computerChoice == 1) {
//       computer = 'stone';
//     }
//     // sinon Si l'IA choisi 'papier'
//     else if (computerChoice == 2) {
//       computer = 'paper' ;
//     }
//     // sinon il choissira 'ciseaux'
//     else {
//       computer = 'scissors';
//     }
//   }
//
//   // function au clique
//   $('#result').click(function() {
//     // au .click j'appelle la function du choix aléatoire de l'IA
//     computerChoice();
//     // variables pour afficher les scores dans des 'span'
//     let robot = $('.left');
//     let human = $('.right');
//     // variables pour afficher les pourcentages de victoire pour l'IA et le joueur
//     let pHuman = $('.purcent-human');
//     let pRobot = $('.purcent-robot');
//     // variables pour le calcule de pourcentage de victoire pour le robot et le joueur
//     let purcentHuman = ((humanScore / nbScore) * 100).toFixed(0);
//     let purcentRobot = ((computerScore / nbScore) * 100).toFixed(0);
//     if (player == '') {
//       result.html('Choisissez entre Pierre, Feuille ou Ciseaux !');
//     }
//     /*ce 'else if(sinon si)', ne sert a rien si se n'est gagner*/
//     else if (player == 'puit')
//     {
//       result.html('ez');
//     }
//     // toutes les conditions ci-dessous feront perdre le joueur
//     else if ((computer == 'stone' && player == 'scissors') || (computer == 'paper' && player == 'stone') || (computer == 'scissors' && player == 'paper')){
//       // affiche le résultat 'perdu'
//       result.html('perdu');
//       // affiche le score pour l'IA
//       robot.html('Robot: ' + computerScore);
//       // affiche le pourcentage pour l'IA
//       pRobot.html('Robot ' + purcentRobot + '%');
//       // a chaque clique, le compteur ajoute +1 au gagnant
//       computerScore++;
//       // a chaque victoire ou défaite 'nbScore' gagnera +1 pour que le calcule du pourcentage puisse être fait
//       nbScore++;
//     }
//     // sinon si, pc égal a player on aura un match nulle
//     else if (computer == player)
//     {
//       result.html('match nul');
//       // sinon, si aucune des premieres conditions n'est pas remplis on gagne
//     }else{
//       // affiche le résultat 'gagné'
//       result.html('gagné');
//       // affiche le score pour le Joueur
//       human.html('Computer: ' + humanScore);
//       // affiche le pourcentage pour le Joueur
//       pHuman.html('Human ' + purcentHuman + '%');
//       // a chaque clique, le compteur ajoute +1 au gagnant
//       humanScore++;
//       // a chaque victoire ou défaite 'nbScore' gagnera +1 pour que le calcule du pourcentage puisse être fait
//       nbScore++;
//     }
//   });
// });
