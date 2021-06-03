Ecwid.OnPageLoaded.add(function(page) {
	console.log('The custom app loaded');
	
	if (page.type == "CHECKOUT_PAYMENT_DETAILS") {
		//alert this app loaded
		console.log('The custom app works in payment page!!');
	}
});

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
