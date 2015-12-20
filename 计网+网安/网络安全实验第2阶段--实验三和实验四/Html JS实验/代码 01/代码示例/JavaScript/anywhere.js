function dispalyIt(evt)
{
	var dom = document.getElementById("message");
	dom.style.left = (evt.clientX - 130) + "px";
	dom.style.top = (evt.clientY - 25) + "px";
	dom.style.visibility = "visible";
//	alert(dom.style.left);
}

function hideIt()
{
	document.getElementById("message").style.visibility = "hidden";
}