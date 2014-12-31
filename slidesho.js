var i = 0; 

var imge = new Array();   

// LIST OF imgeS 
var bb;
for (bb=0;bb<6;bb++){
imge[bb] = bb+".jpg"; 
} 

var k = imge.length-1;    

var note = new Array(); 
var count = new Array();

// All notes which are writen on pics are goes here.. 
var aa;
for(aa=1;aa<=10;aa++){
note[aa] = "This is my ["+aa+"]  Image"; 
}  

function swapimge(){ 

	var el = document.getElementById("myfram").innerHTMl=note[i]; 
	var img= document.getElementById("slide").src = imge[i]; 

			if(i < k ) {
					i++;
				}  

			else  { 
					i = 0; 
				} 

	setTimeout("swapimge()",1500);  

} 

function addLoadEvent(func) { 

	var oldonload = window.onload; 

		if (typeof window.onload != 'function') { 
			window.onload = func; 
		} 
		else  { 
			window.onload = function() { 
				if (oldonload) { 
					oldonload(); 
				  } 
			  func(); 
			} 
		} 
}  

addLoadEvent(function() { swapimge(); }); 