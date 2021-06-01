Ecwid.OnPageLoaded.add(function(page) {
	console.log('The custom app loaded');
	
	if (page.type == "CHECKOUT_PAYMENT_DETAILS") {
		//alert this app loaded
		console.log('The custom app works in payment page!!');
		
		// check current payment method
		document.querySelectorAll(".ec-radiogroup__item--PayPal.ec-radiogroup__item--module-PayPalStandard").click(function () {
			console.log('clicked');
		});
	}
});
