Ecwid.OnPageLoaded.add(function(page) {
	console.log("Current page is of type: " + page.type);
	
	if (page.type == "CART") {
		//alert this app loaded
		console.log("Current page is of type: " + page.type);
		
		// Initialize extra fields
		ec = ec || {};
		ec.order = ec.order || {};
		ec.order.extraFields = ec.order.extraFields || {};

		ec.order.extraFields.surcharge = {
			'value': 'Credit Card Processing Fee',
			'options': [{ 
				"title": "Credit Card Processing Fee",
				"surcharge": 0
			},
			],
			'surchargeShortName': {
				'name': 'Processing Fee',
				'showSurchargePercentValue': false
			},
			'surchargeType': 'PERCENT',
			'showZeroSurchargeInTotal': false
		};
		Ecwid.refreshConfig();	
	}
	
	if (page.type == "CHECKOUT_PAYMENT_DETAILS") {
		//alert this app loaded
		console.log("Current page is of type: " + page.type);
		
		var x = 0;
		
		//Select payment define surcharge percent
		document.getElementById("myBtn").addEventListener("click", paypalextra);

		function paypalextra() {
			x = 5;
			console.log("surcharge : " + x);
			surcharge_refresh();
		}
		
		function surcharge_refresh() {
			// Initialize extra fields
			ec = ec || {};
			ec.order = ec.order || {};
			ec.order.extraFields = ec.order.extraFields || {};

			ec.order.extraFields.surcharge = {
				'value': 'Credit Card Processing Fee',
				'options': [{ 
					"title": "Credit Card Processing Fee",
					"surcharge": 5
				},
				],
				'surchargeShortName': {
					'name': 'Processing Fee',
					'showSurchargePercentValue': false
				},
				'surchargeType': 'PERCENT',
				'showZeroSurchargeInTotal': false
			};
			Ecwid.refreshConfig();	
		}
	}
});
