<?php

$data = file_get_contents("data-1.json");
$data_filtre = json_decode($data, true);

$ciudad = $_POST["ciudad"];
$tipo = $_POST["tipo"];
$desde = $_POST["desde"];
$hasta = $_POST["hasta"];

$result = array();

for ($i=0; $i < count($data_filtre); $i++) {

  $precio = $data_filtre[$i]["Precio"];
  $precio = trim($precio,"$");
  $precio = str_replace(",","",$precio);

  $generic = "";

  //Filtro cuando selecciona especificacion en ciudad y tipo
  if ($data_filtre[$i]["Ciudad"] === $ciudad && $data_filtre[$i]["Tipo"] === $tipo && $precio > $desde && $precio < $hasta) {
    $option = $data_filtre[$i];
    array_push($result,$option);
  }

  //Filtro cuando selecciona especificacion solamente en ciudad
  if ($data_filtre[$i]["Ciudad"] === $ciudad && $generic === $tipo && $precio > $desde && $precio < $hasta) {
    $option = $data_filtre[$i];
    array_push($result,$option);
  }

  //Filtro cuando selecciona especificacion solamente en tipo
  if ($generic === $ciudad && $data_filtre[$i]["Tipo"] === $tipo && $precio > $desde && $precio < $hasta) {
    $option = $data_filtre[$i];
    array_push($result,$option);
  }
}

$result = json_encode($result);

print_r($result);

 ?>
