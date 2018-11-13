<?php
$cities = [
  0 => "Torino", 
  1 => "London", 
  2 => "Edinburgh"
];

function print_out($city, $key){
    echo $key." => ".$city."\n";
}

array_walk($cities, 'print_out');

/*
 * 0 => Torino
 * 1 => London
 * 2 => Edinburgh
 */
