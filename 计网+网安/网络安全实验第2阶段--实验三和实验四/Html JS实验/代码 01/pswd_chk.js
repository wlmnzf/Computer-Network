function chkPasswords()
{
	var init = document.getElementById("initial");
	var sec = document.getElementById("second");
	
	if(init.value == "")
	{
		alert("You did not enter a Password \n" + "Please enter one now");
		init.focus();
		return false;
	}
	if(init.value != sec.value)
	{
		alert("The two passwords you entered are not the same \n" + "Please re-enter both now");
		init.focus();
		init.select();
		return false;
	}	else
		return true;	
}