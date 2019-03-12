//Peticion de todos los datos con AJAX para mostrar
document.getElementById("mostrarTodos").addEventListener("click",function(){
  $.ajax(
    {
      url:  "data-1.json",
      type: "POST",
      data: {},
    }
  ).done(function(data){
    $resultados = data;
    console.log($resultados[1]);
    for (var i = 0; i < $resultados.length; i++) {
      $result = Object.values($resultados[i]);
      $("#resultados").append('<div class="card col l12 row"><div class="col l3"><img class="responsive-img" src="./img/home.jpg"></div><div class="col l9"><p>Dirección: '+$result[1]+'<br> Ciudad: '+$result[2]+'<br> Telefono: '+$result[3]+'<br> Codigo Portal: '+$result[4]+'<br> Tipo: '+$result[5]+'<br> Precio: <strong>'+$result[6]+'</strong></p></div></div>');
    }
  });
});
