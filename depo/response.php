<?php 
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json; charset=utf-8');
$req = json_decode(file_get_contents("php://input"),true);
​
// Here you can check/process the order data to calculate surcharge
​
echo "My first PHP script!";

$surcharge = array(
    "surcharges" => array(
        array(
            "id" => "my_custom_surcharge",
            "value" => 5,
            "type" => "PERCENT",
            "description" => "5% for PayPal checkout"
        )
    )
);
​
$output = json_encode($surcharge);
echo $output;
​
?>