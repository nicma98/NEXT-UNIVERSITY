//Petición de AJAX a buscador.php para obtener datos como resultado del buscador
$("#formulario").submit(function(event){
  $ciudad = $("form").find('select[name="ciudad"]').val();
  $tipo = $("form").find('select[name="tipo"]').val();
  $from = $("#rangoPrecio").data().from;
  $to = $("#rangoPrecio").data().to;
  event.preventDefault();
  $.ajax(
    {
      url:  "buscador.php",
      type: "POST",
      data: {ciudad: $ciudad,
        tipo: $tipo,
        desde: $from,
        hasta: $to,
      },
    }
  ).done(function(data){
    $resultados = JSON.parse(data);
    console.log($resultados[1]);
    for (var i = 0; i < $resultados.length; i++) {
      $result = Object.values($resultados[i]);
      $("#resultados").append('<div class="card col l12 row"><div class="col l3"><img class="responsive-img" src="./img/home.jpg"></div><div class="col l9"><p>Dirección: '+$result[1]+'<br> Ciudad: '+$result[2]+'<br> Telefono: '+$result[3]+'<br> Codigo Portal: '+$result[4]+'<br> Tipo: '+$result[5]+'<br> Precio: <strong>'+$result[6]+'</strong></p></div></div>');
    }
    });
});
