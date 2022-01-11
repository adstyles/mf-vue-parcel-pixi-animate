<?php

$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);

print_r($data);

$colour             = "#2778fe"; // defaults
$filesToChange      = "s01.shapes.json"; // defaults

$colour = $data["colour"];
$filesToChange = $data["filesToChange"];

foreach($filesToChange as $file) {

    $jsonFile = file_get_contents($file);

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

    $fp = fopen('dist/'.$file, 'w');
    fwrite($fp, json_encode($decodedJSON));
    fclose($fp);

}

?>