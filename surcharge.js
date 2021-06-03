Ecwid.OnPageLoaded.add(function(page) {
	console.log("Current page is of type: " + page.type);
	
	if (page.type == "CHECKOUT_PAYMENT_DETAILS") {
		//alert this app loaded
		console.log("Current page is of type: " + page.type);
		
		
	}
});
