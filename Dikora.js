function checkUsername() { 
  let username = document.getElementById("Feld"); 
  let usernameText = username.value;
  if(usernameText == "Ferdinand ZC") {
    document.getElementById("usernameShow").innerHTML="Ferdinand ZC<br/>Schön, dass Du da bist.";
    rest();
  }
  if(usernameText == "Marco") {
    document.getElementById("usernameShow").innerHTML="Marco<br/>Schön, dass Du da bist.";
    rest();
  }
  if(usernameText == "Devious Licks") {
    document.getElementById("usernameShow").innerHTML="Devious Licks<br/>Schön, dass Du da bist.";
    rest();
  }
  if(usernameText == "Emanuel") {
    document.getElementById("usernameShow").innerHTML="Emanuel<br/>Schön, dass Du da bist";
    document.getElementById("userImage").src="pp.png";
    rest();
  }
}
function rest() {
  localStorage.savedUsername = document.getElementById("usernameShow").innerHTML;
  localStorage.savedImage = document.getElementById("userImage").src;
  document.getElementById("des").innerHTML="Schön, dass Du da bist.";
  localStorage.savedDes = document.getElementById("des").innerHTML;
  assign("startseite");
}






