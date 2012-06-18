var compteur = 0;
var i;
var name;

$(document).ready(function()

{

	$("#next").click(function() {
		compteur = compteur+1;
		

		var tabInput = $("#form1 :input");
 		var n = tabInput.length;
 	//	$("#result").html('<div id='+compteur+'></div>');

	 	for (i=0; i<n-2; i++)

 		{
 		
 		name = tabInput[i].getAttribute('name');
 		value = tabInput[i].value;
 		
 	  	if (value != "")
  		{

  		 	$("#result").append(name+' '+value+'\n');   			

  		}
  		else
  		{
  			$("#result").append("");
  		}

	 	}
	 	
	 	$("#form"+parseInt(compteur)+"").css("display", "none");
	 	$("#form"+(parseInt(compteur)+1)+"").css("display", "block");
	 	$("#previous").css("display", "block");



	});

	$("#previous").click(function() {
		$("#result").empty();
		$("#previous").css("display", "none");			 	
	 	$("#form"+parseInt(compteur)+"").css("display", "block");
	 	$("#form"+(parseInt(compteur)+1)+"").css("display", "none");
	 	compteur = compteur-1;
	});

	$("#next2").click(function() {
		compteur = compteur+1;
		



	});



});