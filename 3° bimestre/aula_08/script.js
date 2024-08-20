// var data = new Date();
// var hora = data.getHours();
// var mensagem = "";

//   if(hora>= 6 && hora<12) {mensagem = "Bom dia princesa!!";}
//     else if (hora>= 12 && hora<18) {mensagem = "Boa tarde 9inha!!";}
//     else if (hora>= 18) {mensagem = "Boa noite bebe!!";}

//     document.write (mensagem);

// var caso = parseInt (prompt ("dia da semana"));
// var mensagem2 = "";
// switch (caso){
//   case 1: mensagem2 = "Segundinha, vey 🥀"; break;
//   case 2: mensagem2 = "Terçou, bem ⚰️"; break;
//   case 3: mensagem2 = "Quarta??? 🤡"; break;
//   case 4: mensagem2 = "Quuuintouuu 🤰🏽"; break;
//   case 5: mensagem2 = "Sextinha, novinha 🧛🏾"; break;
//   case 6: mensagem2 = "Sabadinho da maldade 👺"; break;
//   case 7: mensagem2 = "domingo depressivo 🤥"; break;

//   default:
//     mensagem2 = "Digite um dia válido, amigão 😒";
// }
// document.write(mensagem2);

var nota = parseInt (prompt ("nota?"));
var mensagem1 = "";
  if(nota>= 6) {mensagem1 = "Está aprovado!!";}
  else if (nota>= 4 || nota<=6) {mensagem1 = "Prova de recuperação";}
  else {mensagem1 = "reprovado";}

  document.write(mensagem1)