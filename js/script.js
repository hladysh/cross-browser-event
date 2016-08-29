(function() {
 
 
//  var buttons = document.getElementsByTagName('button');
 
//  var changeColor = function (e) {   
//  	eventsObj.preventDefault(e);
 
//  	var elem = eventsObj.getTarget(e);
 
// 	if (elem.id === 'day') {
// 		document.body.className = 'day';
// 	} else if (elem.id === 'night') {
// 		document.body.className = 'night';
// 	} 
//  };
 
 
//  for (var i = 0, len = buttons.length; i < len; i++) {   
//  	eventsObj.addEvent(buttons[i], 'click',changeColor ); 
//  	//eventsObj.removeEvent(buttons[i], 'click',changeColor ); 
//  };



// Делегуання подій


 var changeColor = function (e) {   
 	eventsObj.preventDefault(e);
 
 	var elem = eventsObj.getTarget(e),
 		colorData = elem.getAttribute('data-color'); 
 
 	if ( colorData ) {
 
 		if (e.type === 'click') {
 			document.body.className = '';
 
 		} else if (e.type === 'mouseover') { 
 			document.body.className = colorData;
 		}
 	}	 
 };
 
 
 eventsObj.addEvent(document, 'click', changeColor );
 eventsObj.addEvent(document, 'mouseover', changeColor );
 
 
 
})();	 