<?php
$data = file_get_contents("data-1.json");
$data_filtre = json_decode($data, true);
$tip_filtre = array();

for ($i=0; $i < count($data_filtre); $i++) {
  $tip = $data_filtre[$i]["Tipo"];
  array_push($tip_filtre,$tip);
}

$tip_filtre = array_unique($tip_filtre);
$tip_filtre = json_encode($tip_filtre);

print_r($tip_filtre);

?>
