Ecwid.OnPageLoaded.add(function(page) {
	console.log('The custom app loaded');
	
	if (page.type == "CHECKOUT_PAYMENT_DETAILS") {
		//alert this app loaded
		console.log('The custom app works in payment page!!');
		
		// check current payment method
		document.getElementsByClassName("ec-radiogroup__item--checked").onclick = function(){
			console.log('clicked');
			console.log(document.getElementsByClassName);
		};
	}
});
