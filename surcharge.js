Ecwid.OnPageLoaded.add(function(page) {
	console.log('The custom app works!');
	
	var surcharge;
	
	if (page.type == "CHECKOUT_PAYMENT_DETAILS") {
		//alert this app loaded
		console.log('The custom app works second time!!');
		
		// check current payment method
		document.getElementById("ec-radiogroup__item--module-PayPalStandard").onclick = function() {paypal()};
	}
	
	function paypal() {
		console.log('Selected ' );
	}
};
