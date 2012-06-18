var compteur = 0;
var i;
var name;

$(document).ready(function()

{

	$("#next").click(function() {
		compteur = compteur+1;
		

		var tabInput = document.getElementsByTagName("input");
 		var n = tabInput.length;
 	//	$("#result").html('<div id='+compteur+'></div>');

	 	for (i=0; i<n-1; i++)

 		{
 		
 		name = tabInput[i].getAttribute('name');
 		value = tabInput[i].value;
 		alert(value);
 	  	if (value != "")
  		{

  		 	$("#result").append(name+' '+value+'\n');   			

  		}
  		else
  		{
  			$("#result").append("");
  		}

	 	}
	 	
	 	$("#form"+parseInt(compteur)+"").css("display, none");
	 	$("#form"+(parseInt(compteur)+1)+"").css("visibility, visible");



	});



});