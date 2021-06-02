Ecwid.OnPageLoaded.add(function(page) {
	console.log('The custom app loaded');
	
	if (page.type == "CHECKOUT_PAYMENT_DETAILS") {
		//alert this app loaded
		console.log('The custom app works in payment page!!');
		
		/*
		var element = page.getElementByClassName("form-control__radio");
		element.onclick = function(event) {
  			console.log(event);
		};
		*/
		
		// Initialize extra fields
		ec = ec || {};
		ec.order = ec.order || {};
		ec.order.extraFields = ec.order.extraFields || {};
		// Set order surcharge
		ec.order.extraFields.surcharge = {
		    'value': 'Custom charge',
		    "options": [
		    { 
			"title": "Custom charge",
			"surcharge": 5
		    },
		    ],
		    "surchargeShortName": {
			"name": "Surcharge",
			 "showSurchargePercentValue": false
		    },
		    'surchargeType': 'PERCENT'
		}
		Ecwid.refreshConfig();
	}
});
