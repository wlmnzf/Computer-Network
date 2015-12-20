function setColor(where, newColor)
{
	if(where == "background")
	{
		document.body.style.backgroundColor = newColor;
//		alert("background");
	}
	else
	{
		document.body.style.color = newColor;
//		alert("foreground");
	}
}