(function() {
 
 
 var buttons = document.getElementsByTagName('button');
 
 var changeColor = function (e) {   
 	eventsObj.preventDefault(e);
 
 	var elem = eventsObj.getTarget(e);
 
	if (elem.id === 'day') {
		document.body.className = 'day';
	} else if (elem.id === 'night') {
		document.body.className = 'night';
	} 
 };
 
 
 for (var i = 0, len = buttons.length; i < len; i++) {   
 	eventsObj.addEvent(buttons[i], 'click',changeColor ); 
 	//eventsObj.removeEvent(buttons[i], 'click',changeColor ); 
 };
 
 
 
})();	 