Ecwid.OnPageLoaded.add(function(page) {
	console.log('The custom app loaded');
	
	if (page.type == "CHECKOUT_PAYMENT_DETAILS") {
		//alert this app loaded
		console.log('The custom app works in payment page!!');
		
		var widgets = Ecwid.getInitializedWidgets();
		console.log(widgets);
		
		// Initialize extra fields
		ec = ec || {};
		ec.order = ec.order || {};
		ec.order.extraFields = ec.order.extraFields || {};
		// Set order surcharge
		ec.order.extraFields.surcharge = {
		    'value': 'Credit Card Processing Fee',
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
		};
		Ecwid.refreshConfig();
	}
});
