
function init() {

var i = 1;   
//to make letters come up and back             
function textApp () {   
   setTimeout(function () {    
      document.querySelector('.p' + [i]).classList.add('gone');    
      i++;                     
      if (i < 15) {            
         textApp();              
      }  

       		if (i === 15){
       			document.querySelector('.p16').classList.add('gone');
   			setTimeout (function(){ 
   				i === 16; 
  				textApp();
   			},800)
   		}

      if ( i > 15) {

		      	function bTextApp () {
		   		setTimeout(function () { 
		   			i--;
			      	document.querySelector('.p' + [i]).classList.remove('gone');                        
				    if (i > 1) { 
					    bTextApp();
					    }
				    if (i === 1) {  
						document.querySelector('.p16').classList.remove('gone');          
					    textApp();             
					    }                      
				  	}, 80)
		   		} bTextApp();
		}                  
   }, 100)

} textApp();
//make color[j] j > color.length -1 j++ 
var color = ['red', 'orange', 'green', 'blue', 'purple', 'pink']; 
var j =0;  
k=1;
		function colorText (k) {	
						if (j < 6) {
							setTimeout(function() {
								//console.log('k' +k + ' + j' +j);
								function sameL(){
									setTimeout(function(){
										document.querySelector('.p' + k).style.color = color[j]; 
										j++;
										}, 400)
								} sameL();
								colorText(k);
							}, 400)
						}
							if ( j === 6){
								j=0;
								//console.log('j===6');
								colorText(k);
							}
		}colorText(k);

function letterLoop(){
	if (k < 17) {
		colorText(k);
		k++;
		letterLoop();
	}
	if (k=== 17) {
		k===0;

	}
	
}letterLoop();


document.getElementById("myVideo").load();
var content;
//giving juulia money 
	document.addEventListener('keypress', function(event) {
				if (event.keyCode === 13 || event.which === 13){
					addItem();
					var content = document.querySelector(".total").textContent;
					console.log(content);
				}
					function addItem(){
						document.querySelector(".add__value").onchange = function(){
						document.querySelector(".total").textContent = content + " // " +
						document.querySelector(".add__description").value + ' gave ' + document.querySelector(".add__value").value +' things';
							function changeB () {
							document.querySelector(".add__value").value = 'Donation';
							var content = document.querySelector(".total").textContent;
							}changeB();
						}
					}
	})	
} init();
