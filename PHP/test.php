<?php
/**
 * Created by PhpStorm.
 * User: hiroko
 * Date: 9/23/17
 * Time: 12:56 PM
 */


//$data = array("red", "green", "blue");
//array_push($data, "yellow");

$data = array("red", "green", "blue");
array_splice($data, 1, 1);

print_r($data);

?>