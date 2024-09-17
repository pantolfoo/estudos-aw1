var hoje = new Date();
var hora = hoje.getHours();
var mensagem = "";

if (hora >= 6 && hora < 12)
  {
    mensagem = "bom dia princesa";
  }
  
else if (hora >= 12 && hora < 18)
{
  mensagem = "tarrdee";
}

else if (hora >= 18 && hora < 00)
{
  mensagem = "boa noite pae";
}

else if (hora >= 00 && hora < 06)
{
  mensagem = "boa noite pae";
}