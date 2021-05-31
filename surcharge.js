    <script>
      var selectedValue="";
      
      if(document.getElementById('PayPal').checked)
        {   
           selectedValue = 5;
        }  

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
                "surcharge": selectedValue
            },
            ],
            "surchargeShortName": {
                "name": "Surcharge",
                 "showSurchargePercentValue": false
            },
            'surchargeType': 'PERCENT'
        }
        Ecwid.refreshConfig();
    </script>
