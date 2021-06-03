Ecwid.OnPageLoaded.add(function(page) {
	console.log("Current page is of type: " + page.type);
	
	if (page.type == "CHECKOUT_PAYMENT_DETAILS") {
		//alert this app loaded
		console.log("Current page is of type: " + page.type);
	
	
	
		// Initialize extra fields
		ec = ec || {};
		ec.order = ec.order || {};
		ec.order.extraFields = ec.order.extraFields || {};

		ec.order.extraFields.surcharge = {
			'title': 'Tips',
			'value': 'Custom charge',
			'type': 'toggleButtonGroup',
			"options": [
			{ 
				"title": "Credit Card Processing Fee",
				"surcharge": 5
			},
			],
			
			'surchargeShortName': {
				'name': 'ProcessingFee',
				'showSurchargePercentValue': false,
			},
			'surchargeType': 'PERCENT'
		};
		Ecwid.refreshConfig();
	
	}
});
