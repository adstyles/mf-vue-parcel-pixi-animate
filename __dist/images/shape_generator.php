<?php

$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);

// print_r('testing');

// print_r($data);
// error_log("$data", $data);

// defaults
// $colour             = "#2778fe"; // defaults

// $dede_skin_original = '#2778fe';
$dede_skin_original = '#8e4832';
$arlo_skin_original = '#eeb09c';
$dede_hair_original = '#000001';
$arlo_hair_original = '#000002';

// $dede_skin_new = '#1aeca5';
// $arlo_skin_new = '#c737cd';
// $dede_hair_new = '#5337e4';
// $arlo_hair_new = '#b32a3d';

$dede_skin_new = '#letsgo';
$arlo_skin_new = '#yesmate';
$dede_hair_new = '#topstuff';
$arlo_hair_new = '#wowsers';

// $filesToChange      = "s01.shapes.json"; 

$filesToChange      = array(
    's01.shapes.json',
    's02.shapes.json',
    's03.shapes.json',
    's04.shapes.json'
);

$userID = 'data_failed';

// data from AXIOS call
// $colour             = $data["colour"];

if (!empty($data)) {
    
    $dede_skin_original     = $data['$dede_skin_original'];
    $arlo_skin_original     = $data['$arlo_skin_original'];
    $dede_hair_original     = $data['$dede_hair_original'];
    $arlo_hair_original     = $data['$arlo_hair_original'];

    $dede_skin_new          = $data['$dede_skin_new'];
    $arlo_skin_new          = $data['$arlo_skin_new'];
    $dede_hair_new          = $data['$dede_hair_new'];
    $arlo_hair_new          = $data['$arlo_hair_new'];

    $userID                 = $data["$userID"];

}

print_r($data);

function bob() {
    echo'bob here';
}

function str_replace_with_sed($search_1, $replace_1, $search_2, $replace_2, $search_3, $replace_3, $search_4, $replace_4, $file_in, $userID)
{

    // make unique folder using $userID
    if (!file_exists($userID)) {
        mkdir($userID, 0777, true);
    }

    $file_out = '/json/' . $userID . '/' . $file_in;
    // $file_out = 'something/' . $file_in;
    // $file_out = $userID . '.json';

    // print_r($file_out);

    $cmd_opts = '';
    if (! $file_out) 
    {
        // replace inline in $file_in
        $cmd_opts .= ' -i';
    }

    // We will use Basic Regular Expressions (BRE). This means that in the 
    // search pattern we must escape
    // $.*[\]^
    //
    // The replacement string must have these characters escaped
    // \ & 
    //
    // In both cases we must escape the separator character too ( usually / )
    // 
    // Since we run the command trough the shell we We must escape the string
    // too (yai!). We're delimiting the string with single quotes (') and we'll
    // escape them with '\'' (close string, write a single quote, reopen string)    

    // Replace all the backslashes as first thing. If we do it in the following
    // batch replace we would end up with bogus results

    // $search_1 & $replace_1
    $search_1_pattern = str_replace('\\', '\\\\', $search_1);

    $search_1_pattern = str_replace(array('$', '.', '*', '[', ']', '^'),
                                  array('\\$', '\\.', '\\*', '\\[', '\\]', '\\^'),
                                  $search_1_pattern);

    $replace_1_string = str_replace(array('\\', '&'),
                                  array('\\\\', '\\&'),
                                  $replace_1);

    // $search_2 & $replace_2
    $search_2_pattern = str_replace('\\', '\\\\', $search_2);

    $search_2_pattern = str_replace(array('$', '.', '*', '[', ']', '^'),
                                  array('\\$', '\\.', '\\*', '\\[', '\\]', '\\^'),
                                  $search_2_pattern);

    $replace_2_string = str_replace(array('\\', '&'),
                                  array('\\\\', '\\&'),
                                  $replace_2);

    // $search_3 & $replace_3
    $search_3_pattern = str_replace('\\', '\\\\', $search_3);

    $search_3_pattern = str_replace(array('$', '.', '*', '[', ']', '^'),
                                  array('\\$', '\\.', '\\*', '\\[', '\\]', '\\^'),
                                  $search_3_pattern);

    $replace_3_string = str_replace(array('\\', '&'),
                                  array('\\\\', '\\&'),
                                  $replace_3);

    // $search_4 & $replace_4
    $search_4_pattern = str_replace('\\', '\\\\', $search_4);

    $search_4_pattern = str_replace(array('$', '.', '*', '[', ']', '^'),
                                  array('\\$', '\\.', '\\*', '\\[', '\\]', '\\^'),
                                  $search_4_pattern);

    $replace_4_string = str_replace(array('\\', '&'),
                                  array('\\\\', '\\&'),
                                  $replace_4);




    $output_suffix = $file_out ? " > '$file_out' " : '';
    $cmd = sprintf("sed ".$cmd_opts." -e 's/%s/%s/g'  -e 's/%s/%s/g'  -e 's/%s/%s/g'  -e 's/%s/%s/g' \"%s\" ".$output_suffix,
                    str_replace('/','\\/', # escape the regexp separator
                      str_replace("'", "'\''", $search_1_pattern) // sh string escape
                    ),
                    str_replace('/','\\/', # escape the regexp separator
                      str_replace("'", "'\''", $replace_1_string) // sh string escape
                    ),
                    str_replace('/','\\/', # escape the regexp separator
                      str_replace("'", "'\''", $search_2_pattern) // sh string escape
                    ),
                    str_replace('/','\\/', # escape the regexp separator
                      str_replace("'", "'\''", $replace_2_string) // sh string escape
                    ),
                    str_replace('/','\\/', # escape the regexp separator
                      str_replace("'", "'\''", $search_3_pattern) // sh string escape
                    ),
                    str_replace('/','\\/', # escape the regexp separator
                      str_replace("'", "'\''", $replace_3_string) // sh string escape
                    ),
                    str_replace('/','\\/', # escape the regexp separator
                      str_replace("'", "'\''", $search_4_pattern) // sh string escape
                    ),
                    str_replace('/','\\/', # escape the regexp separator
                      str_replace("'", "'\''", $replace_4_string) // sh string escape
                    ),
                    $file_in
                  );

    // passthru($cmd, $status);
    // return $status;

    // sed -e 's/#ffe18c/ISAWESOME/g ' "testing.shapes.json" > 'topstuff2345sdf/testing.shapes.json'
    // echo "<br/>";
    // print_r($cmd);
    // echo "<br/>";

    // $examplecmd = 'sed -e \'s/#88e0b3/TOMBO/g\' -e \'s/#ffe18c/HELLO/g\' "testing.shapes.json" > \'sed/temp2.json\'';
    // echo "<br/>";
    // print_r($examplecmd);

    echo "str_replace_with_sed";
    
    passthru($cmd, $status);

    return $status;

}

try {

    foreach($filesToChange as $file) {

        str_replace_with_sed($dede_skin_original, $dede_skin_new, $arlo_skin_original, $arlo_skin_new, $dede_hair_original, $dede_hair_new, $arlo_hair_original, $arlo_hair_new, $file, $userID); // 

        echo "DATEA";

        bob();

        // USING PHP TO DECODE JSON AND UPDATE...

        // $jsonFile = file_get_contents($file);
        // $decodedJSON = json_decode($jsonFile, true);
            
        // foreach($decodedJSON as &$values):
        //     if(is_array($values)):
        //         foreach($values as &$value):
        //             if($value === $dede_skin_original) { $value = $dede_skin_new; }
        //             if($value === $arlo_skin_original) { $value = $arlo_skin_new; }
        //             if($value === $dede_hair_original) { $value = $dede_hair_new; }
        //             if($value === $arlo_hair_original) { $value = $arlo_hair_new; }
        //             unset($value);
        //         endforeach;
        //     endif;
        // endforeach; 

        // $newArray = $decodedJSON;

        // $fp = fopen('dist/'.$file, 'w');
        // fwrite($fp, json_encode($decodedJSON));
        // fclose($fp);
        // unset($decodedJSON);

    }

} catch (exception $e) {

    //code to handle the exception
    echo $e->getMessage();
    error_log("catch error:", $e);

}

?>