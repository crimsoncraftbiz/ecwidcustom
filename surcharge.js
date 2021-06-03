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
		document.getElementsByClassName("ec-radiogroup__item ec-radiogroup__item--2889-1620485335547 ec-radiogroup__item--PayPal ec-radiogroup__item--module-PayPalStandard  ec-radiogroup__item--multiline")[0].addEventListener("click", paypalextra);
		
		//Payment method is Paynow
		document.getElementsByClassName("ec-radiogroup__item ec-radiogroup__item--6667-1621574903717 ec-radiogroup__item--PayNow   ec-radiogroup__item--multiline")[0].addEventListener("click", revertzero);
		
		//Payment method is Bank
		document.getElementsByClassName("ec-radiogroup__item ec-radiogroup__item--1598587240-1620300958613 ec-radiogroup__item--Bank-Transfer   ec-radiogroup__item--multiline")[0].addEventListener("click", revertzero);
		
		//Payment method is Wise
		document.getElementsByClassName("ec-radiogroup__item ec-radiogroup__item--4259-1620485353938 ec-radiogroup__item--Wise   ec-radiogroup__item--multiline")[0].addEventListener("click", wiseextra);
		
		function paypalextra() {
			x = 5;
			console.log("surcharge : " + x);
			surcharge_refresh();
		}
		
		function revertzero() {
			x = 0;
			console.log("surcharge : " + x);
			surcharge_refresh();
		}
		
		function wiseextra() {
			x = 4.5;
			console.log("surcharge : " + x);
			surcharge_refresh();
		}
		
		function surcharge_refresh() {
			console.log("surcharge passed in : " + x);
			// Initialize extra fields
			ec = ec || {};
			ec.order = ec.order || {};
			ec.order.extraFields = ec.order.extraFields || {};

			ec.order.extraFields.surcharge = {
				'value': 'Credit Card Processing Fee',
				'options': [{ 
					"title": "Credit Card Processing Fee",
					"surcharge": x
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
