<?php

// $colour = $_GET["colour"];
$colour = "#bada55";
// $pathToFile = "https://mf.wip/images/s01.shapes.json";
// $pathToFile = "s01.shapes.halved.json";
// $pathToFile = "https://mf.wip/images/s01.shapes.min.json";
// $pathToFile = "s01.shapes.min.json";
$pathToFile = "s01.shapes.json";
$jsonFile = file_get_contents($pathToFile);

// echo 'why not working???';
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

$fp = fopen('results.json', 'w');
fwrite($fp, json_encode($decodedJSON));
fclose($fp);

?>