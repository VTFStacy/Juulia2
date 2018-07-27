function play(){
       var audio = document.getElementById("audio");
       audio.play();
               }
//giving juulia money 
var content;
	document.addEventListener('keypress', function(event) {
				if (event.keyCode === 13 || event.which === 13){
					addItem();
					play();
					var content = document.querySelector(".total").textContent;
				}
					function addItem(){
						document.querySelector(".add__value").onchange = function(){
							document.querySelector(".total").textContent = content + " // " +
							document.querySelector(".add__description").value + ' gave ' + document.querySelector(".add__value").value +' things';
							function changeB () {
								document.querySelector(".add__value").value = 0;
								var content = document.querySelector(".total").textContent;
								}changeB();
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
