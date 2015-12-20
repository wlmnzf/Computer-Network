function moveIt(movee, newTop, newLeft)
{
	dom = document.getElementById(movee).style;
	
	dom.top = newTop + "px";
	dom.left = newLeft + "px";
}