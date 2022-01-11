<?php

$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);

print_r($data);

$colour = $data["colour"];
// $colour = "#f14b2e";
// $colour = "#fee28a";
// $pathToFile = "https://mf.wip/images/s01.shapes.json";
// $pathToFile = "s01.shapes.halved.json";
// $pathToFile = "https://mf.wip/images/s01.shapes.min.json";
// $pathToFile = "s01.shapes.min.json";
$pathToFile = "s01.shapes.original.json";
$jsonFile = file_get_contents($pathToFile);

// echo 'REQUEST: ';
// print_r($_REQUEST);

// echo 'GET: ';
// print_r($_GET);

// echo '_POST: ';
// print_r($_POST);


// echo 'testing 123';
// echo '$colour: ', $colour;
// echo $jsonFile;

$decodedJSON = json_decode($jsonFile, true);
    
foreach($decodedJSON as &$values):
    if(is_array($values)):
        foreach($values as &$value):
            if($value === "#8e4832")
            {
                $value = $colour;
            }
        endforeach;
    endif;
endforeach; 

$newArray = $decodedJSON;
// $encodedJSON = json_encode($decodedJSON);

// echo $encodedJSON;

$fp = fopen('exported/s01.shapes.json', 'w');
fwrite($fp, json_encode($decodedJSON));
fclose($fp);

?>