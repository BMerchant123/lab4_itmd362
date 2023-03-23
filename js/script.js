function filled(){
  var TOS = document.forms["betaTest"]["not-bot"].value
  if (TOS == 123987) {
    alert("Thank you for subscribing to our notification feed. We will notify you of any updates regarding our beta test")
  } else{
	alert("Please verify that you are not a bot");
    return false;
  }
}

