<?php

$colour = $_GET["colour"];
$pathToFile = get_stylesheet_directory_uri() . "/json/s01.shapes.json";
$jsonFile = file_get_contents($pathToFile);

$decodedJSON = json_decode($jsonFile, true);


    
foreach($decodedJSON as &$values):
    if(is_array($values)):
        foreach($values as &$value):
            if($value === "#8e4832")
            {
                $value = "#bada55";
            }
        endforeach;
    endif;
endforeach; 

$newArray = $decodedJSON;
$encodedJSON = json_encode($decodedJSON);

return $encodedJSON;

?>