var color1 = document.querySelector("input[name='color1']");
 console.log(color1);
var color2 = document.querySelector("input[name='color2']");
var body = document.querySelector("body");

color1.addEventListener("input", function(){
	var colorOne = color1.value;
	var colorTwo = color2.value;
	
	body.style.background = "linear-gradient(to right" + ", " + colorOne + ", " + colorTwo +")";
	document.querySelector("h4").textContent = "linear-gradient(to right" + ", "+ colorOne  +", "+colorTwo +")";
})

color2.addEventListener("input", function(){
	var colorOne = color1.value;
	var colorTwo = color2.value;
	
	body.style.background = "linear-gradient(to right" + ", " + colorOne + ", " + colorTwo +")";
	document.querySelector("h4").textContent = "linear-gradient(to right" + ", "+ colorOne  +", " +colorTwo +")";
})




