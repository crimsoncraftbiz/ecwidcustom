Ecwid.OnPageLoaded.add(function(page) {
	console.log('The custom app works!');
	
	if (page.type == "CHECKOUT_PAYMENT_DETAILS") {
		//alert this app loaded
		console.log('The custom app works second time!!');
		
		// check current payment method
		document.getElementsByClassName("ec-radiogroup__item--checked").onclick = function(){
			console.log('clicked');
		};
	}
});
