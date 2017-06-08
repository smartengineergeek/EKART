// JavaScript Document
function mustFill(){
	var email = document.getElementById("email").value;
	var pass = document.getElementById("pass1").value;
	if(email=="")
	{
		alert("email must be filled out");
		return false;
	}	
	else if(pass=="")
	{
		alert('password must be filled out');
		return false;	
	}
	}