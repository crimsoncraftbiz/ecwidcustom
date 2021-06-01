Ecwid.OnPageLoaded.add(function(page) {
	console.log('The custom app works!');
	
	if (page.type == "CHECKOUT_PAYMENT_DETAILS") {
		// check current payment method
	}
};
