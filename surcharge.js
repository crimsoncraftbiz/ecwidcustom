Ecwid.OnPageLoaded.add(function(page) {
	console.log('The custom app loaded');
	
	if (page.type == "CHECKOUT_PAYMENT_DETAILS") {
		//alert this app loaded
		console.log('The custom app works in payment page!!');
		
		var radios = document.querySelectorAll('input[type=radio][class="form-control__radio"]');
		radios.forEach(radio => radio.addEventListener('change', () => console.log(radio.value)));
	}
});
