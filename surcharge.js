Ecwid.OnPageLoaded.add(function(page) {
	console.log('The custom app loaded');
	
	if (page.type == "CHECKOUT_PAYMENT_DETAILS") {
		//alert this app loaded
		console.log('The custom app works in payment page!!');
		
		var element = document.getElementByClassName("form-control__radio");
		element.onclick = function(event) {
  			console.log(event);
		};
	}
});
