Ecwid.OnPageLoaded.add(function(page) {
	console.log('The custom app loaded');
	
	if (page.type == "CHECKOUT_PAYMENT_DETAILS") {
		//alert this app loaded
		console.log('The custom app works in payment page!!');
		
		// check current payment method
		var paypal = document.getElementsByClassName("ec-radiogroup__item ec-radiogroup__item--2889-1620485335547 ec-radiogroup__item--PayPal ec-radiogroup__item--module-PayPalStandard  ec-radiogroup__item--multiline");
		
		paypal.onclick = function () {
			console.log('clicked');
		};
	}
});
