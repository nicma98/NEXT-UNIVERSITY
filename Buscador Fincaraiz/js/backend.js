//Petición de AJAX a city.php para obtener array con ciudades
function array_city(){
  $.ajax(
    {
      url:  "city.php",
      type: "POST",
      data: {},
    }
  ).done(function(data){
    $datos = JSON.parse(data);
    $cities = Object.values($datos)
    for (var i = 0; i < $cities.length; i++) {
      $city = $cities[i];
      $(".filtroCiudad select").append('<option value="'+$city+'">'+$city+'</option>');
    }
    });
};
array_city();
//Petición de AJAX a tip.php para obtener array con tipos
function array_tip(){
  $.ajax(
    {
      url:  "tip.php",
      type: "POST",
      data: {},
    }
  ).done(function(data){
    $datos = JSON.parse(data);
    $tips = Object.values($datos)
    for (var i = 0; i < $tips.length; i++) {
      $tip = $tips[i];
      $(".filtroTipo select").append('<option value="'+$tip+'">'+$tip+'</option>');
    }
    });
};
array_tip();
