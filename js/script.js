function botChange(){
  var captcha = document.getElementById("not-bot");
  if (captcha == "I aM n0t a b*t") {
  document.getElementById("submit").style.visibility = "visible";
}
	
  else {
    document.getElementById("submit").style.visibility = "hidden";
  }
}
