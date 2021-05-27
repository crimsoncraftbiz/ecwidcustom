// Initialize the application

	EcwidApp.init({
	  app_id: "custom-app-60436294-3", // use your application namespace
	  autoloadedflag: true, 
	  autoheight: true
	});

	var storeData = EcwidApp.getPayload();

    var storeId = storeData.store_id; //60436294
    var accessToken = storeData.access_token;
    var language = storeData.lang;
    var viewMode = storeData.view_mode;

    if (storeData.public_token !== undefined){
      var publicToken = storeData.public_token;
    }

    if (storeData.app_state !== undefined){
      var appState = storeData.app_state;
    }



<script>
//Parse in URL aka request from Ecwid

const url = 'https://app.ecwid.com/api/v3/60436294/order/calculate';
​
//Parse the JSON to retrieve data

// Here you can check/process the order data to calculate surcharge
​var obj = JSON.parse(json);

// Retrieving paymentMethod=PayPal
// Retrieving paymentMethod=Wise


// Return the response
var surcharge = [
	"id" : "PayPal_Transaction_Fee",
	"value" : 1.05,
    "type" : "PERCENT",
    "description" : "+5% for PayPal payments"
	//appliesToProducts => blank
];
​
// Setup up the response back to JSON
var json = JSON.stringify(surcharge);
alert(json);
​</script>
