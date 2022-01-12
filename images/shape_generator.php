<?php

$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);

print_r($data);

// defaults
// $colour             = "#2778fe"; // defaults

$dede_skin_original = '#2778fe';
$arlo_skin_original = '#eeb09c';
$dede_hair_original = '#000001';
$arlo_hair_original = '#000002';

$dede_skin_new = '#1aeca5';
$arlo_skin_new = '#c737cd';
$dede_hair_new = '#5337e4';
$arlo_hair_new = '#b32a3d';

$filesToChange      = "s01.shapes.json"; 

// data from AXIOS call
// $colour             = $data["colour"];
// $dede_skin_original     = $data['$dede_skin_original'];
// $arlo_skin_original     = $data['$arlo_skin_original'];
// $dede_hair_original     = $data['$dede_hair_original'];
// $arlo_hair_original     = $data['$arlo_hair_original'];

// $dede_skin_new          = $data['$dede_skin_new'];
// $arlo_skin_new          = $data['$arlo_skin_new'];
// $dede_hair_new          = $data['$dede_hair_new'];
// $arlo_hair_new          = $data['$arlo_hair_new'];

$filesToChange          = $data["filesToChange"];

foreach($filesToChange as $file) {

    $jsonFile = file_get_contents($file);

    $decodedJSON = json_decode($jsonFile, true);
        
    foreach($decodedJSON as &$values):
        if(is_array($values)):
            foreach($values as &$value):
                if($value === $dede_skin_original) { $value = $dede_skin_new; }
                if($value === $arlo_skin_original) { $value = $arlo_skin_new; }
                if($value === $dede_hair_original) { $value = $dede_hair_new; }
                if($value === $arlo_hair_original) { $value = $arlo_hair_new; }
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