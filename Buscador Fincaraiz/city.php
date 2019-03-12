<?php

$data = file_get_contents("data-1.json");
$data_filtre = json_decode($data, true);
$city_filtre = array();

for ($i=0; $i < count($data_filtre); $i++) {
  $city = $data_filtre[$i]["Ciudad"];
  array_push($city_filtre,$city);
}

$city_filtre = array_unique($city_filtre);
$city_filtre = json_encode($city_filtre);

print_r($city_filtre);

?>
