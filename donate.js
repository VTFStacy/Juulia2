function play(){
       var audio = document.getElementById("audio");
       audio.play();
               }
//giving juulia money 
var content;
	document.addEventListener('keypress', function(event) {
				if (event.keyCode === 13 || event.which === 13){
					/*var content = document.querySelector(".total").textContent;*/
					addItem();
					play();
					
				}
					function addItem(){
						var ad = document.querySelector(".add__description").onchange = 1;
						var av = document.querySelector(".add__value").onchange = 1; 
						var at = document.querySelector(".add__thing").onchange = 1; 
						if (ad === 1 || av === 1 || at === 1 ) {
							change();
						}
						function change(){
						var nLi = document.createElement("Li");                 // Create a <li> node
						var nText = document.createTextNode(document.querySelector(".add__description").value + ' gave ' + document.querySelector(".add__value").value + ' ' + document.querySelector(".add__thing").value);         // Create a text node
						nLi.appendChild(nText);                              // Append the text to <li>
						document.getElementById("myList").appendChild(nLi);     // Append <li> to <ul> with id="myList"

							/*
							var nLi = document.createElement("li");
							document.querySelector(".total").textContent = content + nLi+
							document.querySelector(".add__description").value + ' gave ' + document.querySelector(".add__value").value + ' ' + document.querySelector(".add__thing").value;
							function changeB () {
								document.querySelector(".add__value").value = 0;
								document.querySelector(".add__description").vlaue = " ";
								document.querySelector(".add__thing").value = " ";
								var content = document.querySelector(".total").textContent;
		
								}
							changeB();*/
						}
					}
	})	




$('a').click(function(e) {
e.preventDefault();
newLocation = this.href;
$('.content').fadeOut(2000, newpage);
});
function newpage() {
window.location = newLocation;
}
