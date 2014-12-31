	function facto(){
		var a=document.getElementById("ft").value;
		var b=1,r;
			while(a>0){
				b=b*a; //updating value of b by multiplying a
				a--;  //decrementing value of a by 1 to 0
			}
		document.getElementById("fpp").innerHTML+=" "+b;
	}
	//==================================================
	
	////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	//===========STARTS=========Calc using switch through parseInt reserved function==============================
		<!--//   RESET VALUES OF TEXTBOXES FUNCTIONS //-->
	function rst(){
		document.frm1.n1.value="";
		}
	function rst1(){
		document.frm1.op.value="";
		}
	function rst2(){
		document.frm1.n2.value="";
		}
	
	<!--//  CALCULATION USING SWITCH STATEMENT //-->
	
	
	function tv(a,b)
		{   <!--//   DECLARATION OF VARIABLES //-->
			var a = parseInt(document.frm1.n1.value);
			var b = parseInt(document.frm1.n2.value);
			var op = document.frm1.op.value;

   if (isNaN(a) || isNaN(b))
	{
		alert("Oh my God, Please send only numbers why don't you understand??? haaaN??????????");
      return;
	}
   else{
		switch(op)
			{
				case '+':
					document.frm1.n3.value=a+b;
				break;
		
				case '-':
					document.frm1.n3.value=a-b;
				break;
			
				case '/':
					document.frm1.n3.value=a/b;
				break;
		
				case '*':
					document.frm1.n3.value=a*b;
				break;
		
				default:
					alert("you put an invalid operator please refresh your page to continoue your calculation, Or if you want something else from this calc then Ask it on socioteachers.com.. Thanks ");
			}
		
		}
	return op;
}
//=================================================================================
///////////////////CALC USING RESERVED FUNCTION EVAL()/////////////////////////////
function c(val){
				document.getElementById("d").value=val;
			}
		function v(val){
				document.getElementById("d").value+=val;
			}
		function e(){ 
				try{ 
						c(eval(document.getElementById("d").value))
					}catch(e){
						c('Error') 
					}
				}
//=================================================================================
//////////////////////isNAN reserved function an example///////////////////////////
function myFunction()
		{
			var aa=document.getElementById("isnantxt").value, bb=document.getElementById("isnantxt2").value;
		if (isNaN(aa)){
				document.getElementById("isnantxt").value="";
			}else if(!isNaN(bb)){
				document.getElementById("isnantxt2").value="";
			}
		}
//================================================================================
/////////
function strter(){
var a=1;
a=parseInt(a);
a++;
document.getElementById("fpp").innerHTML+=" "+a;
}